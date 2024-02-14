import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from 'react-router-dom';
import CustomInput from '../UI/CustomInput';
import PrimaryButton from '../UI/PrimaryButton';
import { BASE_URL } from '../Utils/BaseUrl';
import Validation from '../Utils/Validate';
import LinearProgress from '@mui/material/LinearProgress';
import { Autocomplete, TextField } from '@mui/material';

const ServiceProviderForm = () => {
    const [address, setAddress] = useState('');
    const [stateid, setStateId] = useState()
    const [state, setState] = useState([])
    const [errors, setError] = useState({});
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [cat, setCat] = useState([])
    const [progress , setProgress] = useState(false)
    const [value, setValue] = useState({
        image: '',
        fullname: '',
        mobile: '',
        mobile1: '',
        address: '',
        state: '',
        city: '',
        pin: '',
    })
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
        point: null,
    });

    
    async function getstate() {
        axios.get(`${BASE_URL}/state`)
            .then((res) => {
                setState(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getstate()
    }, [])

    const handleSelect = async (selectedAddress) => {
        try {
            const results = await geocodeByAddress(selectedAddress);
            const latLng = await getLatLng(results[0]);
            console.log("Selected Address:", selectedAddress);
            console.log("Coordinates:", latLng);
            setAddress(selectedAddress);
            setCoordinates({
                lat: latLng.lat,
                lng: latLng.lng,
                point: { type: "Point", coordinates: [latLng.lng, latLng.lat] },
            });
        } catch (error) {
            console.error("Error selecting address:", error);
        }
    };

    const MaharashtraBounds = {
        // Replace these values with the actual latitude and longitude bounds for Maharashtra
        north: 21.748512,
        south: 15.602284,
        west: 72.659167,
        east: 80.859336,
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ_cnRTD-5PpbUtXTpKFLqVYbwDremSLs&libraries=places`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", () => setScriptLoaded(true));
    
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);





    async function getcategory() {
        axios.get(`${BASE_URL}/get_category`)
            .then((res) => {
                setCat(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getcategory()
    }, [])
    async function ImageBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
        });

        return data;
    }

    const handleUpload = async (e) => {
        document.getElementById("uptext1").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage(file);
        setValue((prev) => {
            return {
                ...prev,
                image: data,
            };
        });
    };
    const Navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()

      
        setError(Validation(value));
        setTimeout(() => {
            setError("");
        }, 5000);
        const formData = new FormData();
        formData.append('pet_id', localStorage.getItem("pet_id"))
        formData.append('image', image)
        formData.append('fullname', value.fullname)
        formData.append('mobile', value.mobile)
        formData.append('mobile1', value.mobile1)
        formData.append('address', value.address)
        formData.append('state', stateid)
        formData.append('pin', value.pin)

        if (value.address !== "" && value.image !== "" && value.fullname !== "" && value.mobile !== "" && value.address !== "" && stateid !== "" && value.city !== "" && image !== "") {
  setProgress(true)
            fetch(`${BASE_URL}/provider_details`, {
                method: 'POST',
                body: formData,
            })
                .then(data => {
                    if (data) {
                        Navigate('/')
                    }

                    setProgress(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {

        }

    }


    const handleUpload2 = async (e) => {
        document.getElementById("uptext2").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage2(file);
        setValue((prev) => {
            return {
                ...prev,
                image2: data,
            };
        });
    };
    const handleUpload3 = async (e) => {
        document.getElementById("uptext3").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage3(file);
        setValue((prev) => {
            return {
                ...prev,
                image3: data,
            };
        });
    };

    const onHandleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const HandleChangeState = (selectedValue) => {
        if (selectedValue) {
            const selectedId = selectedValue.id;
            console.log(selectedId, "ser");
            setStateId(selectedId)
            // Now you have the selected id, you can use it in your application logic
        }
    };


    return (
        <div className='mx-2'>
            {scriptLoaded && (
                <form onSubmit={handlesubmit} method='POST'>
                    <div>

                        <div className='d-flex py-3'>
                            <div className='upload-box' style={{ position: "relative" }}>
                            <p>Add+</p>
                                <p id='uptext1' style={{ zIndex: "-1", textAlign: "center" }}>profile</p>
                                <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                            </div>
                            {/* <div className='upload-box' style={{ position: "relative" }}>
                                <p id='uptext2' style={{ zIndex: "-1" }}>Upload 2</p>
                                <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload2} />
                            </div>
                            <div className='upload-box' style={{ position: "relative" }}>
                                <p id='uptext3' style={{ zIndex: "-1" }}>Upload 3</p>
                                <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload3} />
                            </div> */}
                        </div>
                        <p class='text-danger m-0 pl-31'>{errors.image}</p>
                        {/* <CustomInput className="my-2" placeholder="Category: <drop-down feild " onChange={onHandleChange} /> */}
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={cat.map((item) => item.title)}
                            sx={{ width: "100%", borderRadius: "8px", border: "1px solid #757575", boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)" }}
                            className='my-2'
                            renderInput={(params) => <TextField {...params} label="Category" />}
                            name="category"
                        /> */}
                        {/* <CustomInput className="my-2" placeholder="Shop/Service Name" onChange={onHandleChange} name="service" /> */}
                        <CustomInput className="my-2" placeholder="Owner's Name(Enter full name)" onChange={onHandleChange} name="fullname" />
                        <p class='text-danger m-0 pl-31'>{errors.fullname}</p>
                        <div className='d-flex'>
                            <div>
                                <CustomInput className="my-2 " style={{ marginRight: "0.25rem" }} placeholder="Contact No 1" onChange={onHandleChange} name="mobile" />
                                <p class='text-danger m-0 pl-31'>{errors.mobile}</p>
                            </div>
                            <div>
                                <CustomInput className="my-2 " style={{ marginLeft: "0.25rem" }} placeholder="Contact No 2" onChange={onHandleChange} name="mobile1" />

                            </div>
                        </div>
                     
                        <CustomInput className="my-2" placeholder="Address" onChange={onHandleChange} name="address" />
                        <p class='text-danger m-0 pl-31'>{errors.address}</p>
                        <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size='small'
                                options={state}
                                getOptionLabel={(option) => option.name}
                                getOptionSelected={(option, value) => option.id === value.id}
                                sx={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    border: "none",
                                    boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)",
                                    fontFamily:"Ubuntu', sans-serif"
                                }}
                                className='my-2'
                                renderInput={(params) => <TextField {...params} label="State" />}
                                name="state"
                                onChange={(event, value) => HandleChangeState(value)} // Pass only the value
                            />
                        {/* <CustomInput className="my-2" placeholder="State" onChange={onHandleChange} name="state" /> */}
                        <p class='text-danger m-0 pl-31'>{errors.state}</p>

                        <div className=' row d-flex justify-content-between'>
                            <div className='col-7'>
                                <CustomInput className="my-2 " placeholder="city" onChange={onHandleChange} name="city" />
                                <p class='text-danger m-0 pl-31'>{errors.city}</p>
                            </div>
                            <div className='col-4 '>
                                <CustomInput className="my-2 " placeholder="Pin Code" onChange={onHandleChange} name="pin" />
                                <p class='text-danger m-0 pl-31'>{errors.pin}</p>
                            </div>
                        </div>
                        <PrimaryButton type="submit" children="Submit" className="mt-5" />
                        {progress?<LinearProgress /> : null}
                    </div>
                </form>
            )}
        </div>
    )
}

export default ServiceProviderForm