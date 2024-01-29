import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Utils/BaseUrl'
import { Link, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../UI/PrimaryButton';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import CustomInput from '../UI/CustomInput';
import CustomTextarea from '../UI/CustomTexarea';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import { Autocomplete } from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ServiceListingPage = () => {
    const [listing, setLising] = useState([])
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [time, setTime] = useState([])
    const [service_id, setId] = useState()
    const [catid , setCatId] =useState("")
    const [servicedata, setserviceData] = useState([])
    const handleOpen = (id) => {
        setOpen3(true);
        axios.post(`${BASE_URL}/service_time`, { id: id })
            .then((res) => {
                setTime(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleClose3 = () => setOpen3(false);





    const handleClickOpen2 = (id) => {
        setOpen2(true);

        const data = {
            service_id: id
        }
        axios.post(`${BASE_URL}/service_data`, data)
            .then((res) => {
                setserviceData(res.data)
           
            })
            .catch((err) => {
                console.log(err)
            })

    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    async function getlisitngdetail() {

        const data = {
            user_id: localStorage.getItem("pet_id")
        }

        axios.post(`${BASE_URL}/service_listing`, data)
            .then((res) => {
                setLising(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getlisitngdetail()
    }, [])

    async function getservicedata() {

        const data = {
            user_id: localStorage.getItem("pet_id")
        }


    }

    useEffect(() => {
        getservicedata()
    }, [])

    const handleDelete  = (id) =>{

        const data = {
            product_id : id
        }
        axios.post(`${BASE_URL}/delete_service`, data)
        .then((res) => {
            console.log(res)
            getlisitngdetail()
            setOpen2(false);
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const validateForm = () => {
        const newErrors = {};

        // Validate category, servicename, and other fields as needed
        if (!catid) {
            newErrors.category = 'Category is required';
        }

        if (!value.servicename) {
            newErrors.servicename = 'Service Name is required';
        }
        if (!value.address) {
            newErrors.address = 'address is required';
        }
        if (!value.image) {
            newErrors.image = ' required';
        }
        if (!value.image2) {
            newErrors.image2 = ' required';
        }
        if (!value.image3) {
            newErrors.image3 = ' required';
        }

        if (!value.description) {
            newErrors.description = 'description is required';
        }

        // Add more validations for other fields

        setErrors(newErrors);

        // Return true if there are no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };

    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [errors, setErrors] = useState({});
    const [cat, setCat] = useState([])
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedTime2, setSelectedTime2] = useState(null);
    const [selectedTime3, setSelectedTime3] = useState(null);
    const [selectedTime4, setSelectedTime4] = useState(null);
    const [selectedTime5, setSelectedTime5] = useState(null);
    const [selectedTime6, setSelectedTime6] = useState(null);
    const [selectedTime7, setSelectedTime7] = useState(null);
    const [selectedTime8, setSelectedTime8] = useState(null);
    const [selectedTime9, setSelectedTime9] = useState(null);
    const [selectedTime10, setSelectedTime10] = useState(null);
    const [selectedTime11, setSelectedTime11] = useState(null);
    const [selectedTime12, setSelectedTime12] = useState(null);
    const [selectedTime13, setSelectedTime13] = useState(null);
    const [selectedTime14, setSelectedTime14] = useState(null);

    const [value, setValue] = useState({
        category: '',
        servicename: '',
        description: '',
        address: '',
        image: '',
        image2: '',
        image3: '',

    })

  
    


   



    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);
    };
    const handleTimeChange2 = (newTime) => {
        setSelectedTime2(newTime);
    };
    const handleTimeChange3 = (newTime) => {
        setSelectedTime3(newTime);
    };
    const handleTimeChange4 = (newTime) => {
        setSelectedTime4(newTime);
    };
    const handleTimeChange5 = (newTime) => {
        setSelectedTime5(newTime);
    };
    const handleTimeChange6 = (newTime) => {
        setSelectedTime6(newTime);
    };
    const handleTimeChange7 = (newTime) => {
        setSelectedTime7(newTime);
    };
    const handleTimeChange8 = (newTime) => {
        setSelectedTime8(newTime);
    };
    const handleTimeChange9 = (newTime) => {
        setSelectedTime9(newTime);
    };
    const handleTimeChange10 = (newTime) => {
        setSelectedTime10(newTime);
    };
    const handleTimeChange11 = (newTime) => {
        setSelectedTime11(newTime);
    };
    const handleTimeChange12 = (newTime) => {
        setSelectedTime12(newTime);
    };
    const handleTimeChange13 = (newTime) => {
        setSelectedTime13(newTime);
    };
    const handleTimeChange14 = (newTime) => {
        setSelectedTime14(newTime);
    };


    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);


    const handleClickOpen = (id) => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };


    const [Checked, setCheckedVal] = useState(0);
    const [Checked2, setCheckedVal2] = useState(0);
    const [Checked3, setCheckedVal3] = useState(0);
    const [Checked7, setCheckedVal7] = useState(0);
    const [Checked4, setCheckedVal4] = useState(0);
    const [Checked5, setCheckedVal5] = useState(0);
    const [Checked6, setCheckedVal6] = useState(0);

    const handleCheckboxChange = () => {
        setChecked(!isChecked); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        setCheckedVal(valueToSend)
        // console.log(valueToSend , "val1");
    };

    const handleCheckboxChange2 = () => {
        setChecked2(!isChecked2); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked2 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        // console.log(valueToSend , "val2");
        setCheckedVal2(valueToSend)
    };
    const handleCheckboxChange3 = () => {
        setChecked3(!isChecked3); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked3 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        // console.log(valueToSend);
        setCheckedVal3(valueToSend)
    };
    const handleCheckboxChange4 = () => {
        setChecked4(!isChecked4); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked4 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        // console.log(valueToSend);
        setCheckedVal4(valueToSend)
    };
    const handleCheckboxChange5 = () => {
        setChecked5(!isChecked5); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked5 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        setCheckedVal5(valueToSend)
    };
    const handleCheckboxChange6 = () => {
        setChecked6(!isChecked6); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked6 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        // console.log(valueToSend);
        setCheckedVal6(valueToSend)
    };
    const handleCheckboxChange7 = () => {
        setChecked7(!isChecked7); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked7 ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        setCheckedVal7(valueToSend)
    };

    const [address, setAddress] = useState('');
 
    const [scriptLoaded, setScriptLoaded] = useState(false);


    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
        point: null,
    });

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
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwqdnE5M-UzB69n455IQ5GPCmsdIXIfBQ&libraries=places`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", () => setScriptLoaded(true));

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);



    async function ImageBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
        });

        return data;
    }

    const days = [
        { name: 'Monday', start: selectedTime, handler: handleTimeChange, end: selectedTime2, handler2: handleTimeChange2, chaeckval: Checked, checkhandle: handleCheckboxChange },
        { name: 'Tuesday', start: selectedTime3, handler: handleTimeChange3, end: selectedTime4, handler2: handleTimeChange4, chaeckval: Checked2, checkhandle: handleCheckboxChange2 },
        { name: 'Wednesday', start: selectedTime5, handler: handleTimeChange5, end: selectedTime6, handler2: handleTimeChange6, chaeckval: Checked3, checkhandle: handleCheckboxChange3 },
        { name: 'Thursday', start: selectedTime7, handler: handleTimeChange7, end: selectedTime8, handler2: handleTimeChange8, chaeckval: Checked4, checkhandle: handleCheckboxChange4 },
        { name: 'Friday', start: selectedTime9, handler: handleTimeChange9, end: selectedTime10, handler2: handleTimeChange10, chaeckval: Checked5, checkhandle: handleCheckboxChange5 },
        { name: 'Saturday', start: selectedTime11, handler: handleTimeChange11, end: selectedTime12, handler2: handleTimeChange12, chaeckval: Checked6, checkhandle: handleCheckboxChange6 },
        { name: 'Sunday', start: selectedTime13, handler: handleTimeChange13, end: selectedTime14, handler2: handleTimeChange14, chaeckval: Checked7, checkhandle: handleCheckboxChange7 },
    ];




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

    // const onHandleChange = (e) => {
    //     setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // }

    const onHandleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const navigate = useNavigate();



    const handleSubmit = (e, ser_id) => {
        e.preventDefault()


        if(validateForm()){

        
        const formData = new FormData();
        formData.append('category', catid)
        formData.append('service', value.servicename)
        formData.append('address', value.address)
        formData.append('image', image)
        // formData.append('image2', image2)
        // formData.append('image3', image3)
        formData.append('description', value.description)
        formData.append('service_id', ser_id)

        formData.append('days', JSON.stringify(days));

        fetch(`${BASE_URL}/update_service`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => {
                getlisitngdetail()
                    navigate('/servicelistingpage')

            })
            .catch((err) => {
                console.log(err)
            })
            .finally(()=>{
                setOpen2(false);
            })}
    }


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

    const HandleChange = (selectedValue) => {
        if (selectedValue) {
            const selectedId = selectedValue.id;
          
            setCatId(selectedId)
            // Now you have the selected id, you can use it in your application logic
        }
    };



    return (
        <div className='service-listing page p-3'>
            {
                listing.map((item, index) => {
                    return (
                        <div className='service-card card p-3 my-2' key={index}>
                            <div className='d-flex justify-content-between ' style={{ borderBottom: "1px solid lightgrey" }}>
                                <h5>{item.title}</h5>
                                <span className='service-list-edit' onClick={() => handleClickOpen2(item.id)}>Edit Service</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Service Title: <span>{item.title}</span></p>
                                    <p>Add Address: <span>{item.address}</span></p>
                                    <p>Date: <span>{item.created_date}</span></p>
                                    <p>{item.id}</p>
                                </div>


                            </div>
                            <React.Fragment >
                                {/* <Button variant="outlined" onClick={handleClickOpen} sx={{ color: "green", border: "1px solid green" }}>
                                    Add Services +
                                </Button> */}
                                <Dialog
                                    fullScreen
                                    open={open2}
                                    onClose={handleClose2}
                                    TransitionComponent={Transition}

                                >
                                    <AppBar sx={{ position: 'relative' }}>
                                        <Toolbar sx={{ background: "green" }}>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleClose2}
                                                aria-label="close"

                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                Edit Service
                                            </Typography>
                                            <Button autoFocus color="inherit" onClick={handleClose2}>
                                                save
                                            </Button>
                                        </Toolbar>
                                    </AppBar>
                                    {servicedata.map((item) => {

                                        return (
                                            <>
                                                {scriptLoaded && (
                                                    <div className='mx-2'>
                                                                <button className='btn btn-danger btn-sm w-100 my-2' onClick={() => handleDelete(item.id)}>Delete Product</button>
                                                        <form onSubmit={(e) => handleSubmit(e, item.id)} method='POST'>
                                                            <div className='my-2'>
                                                                <Autocomplete
                                                                    disablePortal
                                                                    id="combo-box-demo"
                                                                    options={cat}
                                                                    getOptionLabel={(option) => option.title}
                                                                    getOptionSelected={(option, value) => option.id === value.id}
                                                                    sx={{
                                                                        width: "100%",
                                                                        borderRadius: "8px",
                                                                        border: "1px solid #757575",
                                                                        boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)",
                                                                    }}
                                                                    className='my-2'
                                                                    renderInput={(params) => <TextField {...params} label="Category" />}
                                                                    name="category"
                                                                    onChange={(event, value) => HandleChange(value)} // Pass only the value
                                                                />
                                                                {/* <CustomInput name="servicecategory" placeholder="Service Category" onChange={onHandleChange} /> */}
                                                                {errors.category && <p className="text-danger">{errors.category}</p>}
                                                            </div>

                                                            <div className='my-2'>
                                                                <CustomInput name="servicename"  value={value.servicename} onChange={(e) =>onHandleChange(e,index)} />
                                                                {errors.servicename && <p className="text-danger">{errors.servicename}</p>}
                                                            </div>
                                                            <PlacesAutocomplete

                                                                value={address}
                                                                onChange={setAddress}
                                                                onSelect={handleSelect}
                                                                searchOptions={{
                                                                    bounds: MaharashtraBounds,
                                                                }}
                                                            >
                                                                {({
                                                                    getInputProps,
                                                                    suggestions,
                                                                    getSuggestionItemProps,
                                                                    loading,
                                                                }) => (
                                                                    <div className="col-md-12">

                                                                        <input
                                                                            {...getInputProps({
                                                                                className: "location-search-input form-control",
                                                                                autoComplete: "on",
                                                                            })}
                                                                        />
                                                                        <div className="autocomplete-dropdown-container">
                                                                            {loading && <div>Loading...</div>}
                                                                            {/* {console.log(suggestions, "sugge")} */}
                                                                            {suggestions.map((suggestion) => {
                                                                                const style = {
                                                                                    backgroundColor: suggestion.active
                                                                                        ? "#41b6e6"
                                                                                        : "#fff",
                                                                                };
                                                                                return (
                                                                                    <div
                                                                                        {...getSuggestionItemProps(suggestion, {
                                                                                            style,
                                                                                        })}
                                                                                    >
                                                                                        {suggestion.description}
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </PlacesAutocomplete>
                                                            <div className='my-2'>
                                                                <CustomInput name="address" placeholder={item.address} onChange={onHandleChange} />
                                                                {errors.address && <span className="text-danger">{errors.address}</span>}
                                                            </div>
                                                            <div className='row text-center my-4'>
                                                                <p>Service Images</p>
                                                                <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                    <p id='uptext1' style={{ zIndex: "-1", textAlign: "center" }}>Upload 1</p>
                                                                    <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                    <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                                                                    {errors.image && <span className="text-danger">{errors.image}</span>}
                                                                </div>
                                                                <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                    <p id='uptext2' style={{ zIndex: "-1" }}>Upload 2</p>
                                                                    <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                    <input type='file' placeholder='upload' onChange={handleUpload2} />
                                                                    {errors.image2 && <span className="text-danger">{errors.image2}</span>}
                                                                </div>
                                                                <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                    <p id='uptext3' style={{ zIndex: "-1" }}>Upload 3</p>
                                                                    <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                    <input type='file' placeholder='upload' onChange={handleUpload3} />
                                                                    {errors.image3 && <span className="text-danger">{errors.image3}</span>}
                                                                </div>
                                                            </div>

                                                            <div className='my-2'>
                                                                <PrimaryButton children="Add Timings" type="button" onClick={() => handleClickOpen(item.id)} />
                                                                <Dialog
                                                                    fullScreen
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    TransitionComponent={Transition}
                                                                >
                                                                    <AppBar sx={{ position: 'relative' }}>
                                                                        <Toolbar>
                                                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                                                Select Time
                                                                            </Typography>
                                                                            <IconButton
                                                                                edge="start"
                                                                                color="inherit"
                                                                                onClick={handleClose}
                                                                                aria-label="close"
                                                                            >
                                                                                <CloseIcon />
                                                                            </IconButton>
                                                                        </Toolbar>
                                                                    </AppBar>
                                                                    <div>
                                                                        <div className='text-center'>

                                                                            <Button onClick={() => handleOpen(item.id)}>Previous Timing</Button>
                                                                        </div>
                                                                        <Modal
                                                                            open={open3}
                                                                            onClose={handleClose3}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                        >
                                                                            <Box sx={style}>
                                                                                <table width="100% ">
                                                                                    <thead style={{ borderBottom: "1px solid lightgrey" }}>
                                                                                        <th width="40%" style={{ padding: "10px" }}>Day</th>
                                                                                        <th width="30%" style={{ padding: "10px" }}>Start</th>
                                                                                        <th width="30%" style={{ padding: "10px" }}>End</th>
                                                                                    </thead>
                                                                                    {time?.data?.map((item) => {

                                                                                        const date = new Date(item.starttime);
                                                                                        const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
                                                                                        const date2 = new Date(item.endtime);
                                                                                        const formattedTime2 = date2.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
                                                                                        return (


                                                                                            <tr>
                                                                                                <td width="30%"><b>{item.day}</b></td>
                                                                                                <td width="40%"><p>{formattedTime}</p></td>
                                                                                                <td width="30%"><p>{formattedTime2}</p></td>
                                                                                            </tr>


                                                                                        )
                                                                                    })}
                                                                                </table>

                                                                            </Box>
                                                                        </Modal>
                                                                    </div>
                                                                    <TableContainer component={Paper}>
                                                                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                                                            <TableHead>
                                                                                <TableRow>
                                                                                    <TableCell align="left">Day</TableCell>
                                                                                    <TableCell align="center">Starttime</TableCell>
                                                                                    <TableCell align="center">Endtime</TableCell>
                                                                                    <TableCell align="center">Closed</TableCell>
                                                                                </TableRow>
                                                                            </TableHead>
                                                                            <TableBody>

                                                                                {days.map((day, index) => (
                                                                                    <TableRow key={index}>
                                                                                        <TableCell align="left">{day.name}</TableCell>
                                                                                        <TableCell align="left">
                                                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                                <MobileTimePicker defaultValue={day.start} onChange={(newTime) => day.handler(newTime)} placeholder="djhdj" />
                                                                                            </LocalizationProvider>
                                                                                        </TableCell>
                                                                                        <TableCell align="left">
                                                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                                <MobileTimePicker defaultValue={day.end} onChange={(newTime) => day.handler2(newTime)} />
                                                                                            </LocalizationProvider>
                                                                                        </TableCell>
                                                                                        <TableCell align="left">
                                                                                            <Checkbox {...label} className='text-danger' onChange={() => day.checkhandle()} />
                                                                                        </TableCell>
                                                                                    </TableRow>
                                                                                ))}
                                                                            </TableBody>

                                                                        </Table>
                                                                    </TableContainer>
                                                                </Dialog>
                                                            </div>
                                                            <div>
                                                                <CustomTextarea className="my-2" placeholder={item.description} name="description" onChange={onHandleChange} />
                                                                {errors.description && <span className="text-danger">{errors.description}</span>}
                                                            </div>
                                                            <div>
                                                                <PrimaryButton children="submit" type="submit" />
                                                            </div>
                                                        </form>

                                                    </div>
                                                )}
                                            </>
                                        )
                                    })}


                                </Dialog>
                            </React.Fragment>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ServiceListingPage