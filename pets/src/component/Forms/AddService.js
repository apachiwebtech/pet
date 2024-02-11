import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import React, { useEffect, useState } from 'react';
import CustomInput from '../UI/CustomInput';
import CustomTextarea from '../UI/CustomTexarea';
import PrimaryButton from '../UI/PrimaryButton';
import { BASE_URL } from '../Utils/BaseUrl';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import { TimePicker } from '@mui/x-date-pickers';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddService = () => {
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState(null);
    const [catid, setCatid] = useState("");
    const [image2, setImage2] = useState(null);
    const [errors, setErrors] = useState({});
    const [image3, setImage3] = useState(null);
    const [state, setState] = useState([])
    const [stateid, setStateId] = useState()
    const [loader , setLoader] = useState(false)
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
        state: '',
        city: '',
        pincode: '',
        image: '',
        image2: '',
        image3: '',

    })



    const validateForm = () => {
        const newErrors = {};

        // Validate category, servicename, and other fields as needed
        if (!catid) {
            newErrors.category = 'Category is required';
        }
        if (!address) {
            newErrors.places = 'Please select google location';
        }
        if (!value.servicename) {
            newErrors.servicename = 'Service Name is required';
        }
        if (!value.address) {
            newErrors.address = 'address is required';
        }
        if (!stateid) {
            newErrors.state = 'state is required';
        }
        if (!value.city) {
            newErrors.city = 'city is required';
        }
        if (!value.pincode) {
            newErrors.pincode = 'pincode is required';
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
        // if (!selectedTime) {
        //     newErrors.selectedTime = 'please add Timings';
        // }

        // Add more validations for other fields

        setErrors(newErrors);

        // Return true if there are no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };

    const navigate = useNavigate();

    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime.format());
    };
    const handleTimeChange2 = (newTime) => {
        setSelectedTime2(newTime.format());
    };
    const handleTimeChange3 = (newTime) => {
        setSelectedTime3(newTime.format());
    };
    const handleTimeChange4 = (newTime) => {
        setSelectedTime4(newTime.format());
    };
    const handleTimeChange5 = (newTime) => {
        setSelectedTime5(newTime.format());
    };
    const handleTimeChange6 = (newTime) => {
        setSelectedTime6(newTime.format());
    };
    const handleTimeChange7 = (newTime) => {
        setSelectedTime7(newTime.format());
    };
    const handleTimeChange8 = (newTime) => {
        setSelectedTime8(newTime.format());
    };
    const handleTimeChange9 = (newTime) => {
        setSelectedTime9(newTime.format());
    };
    const handleTimeChange10 = (newTime) => {
        setSelectedTime10(newTime.format());
    };
    const handleTimeChange11 = (newTime) => {
        setSelectedTime11(newTime.format());
    };
    const handleTimeChange12 = (newTime) => {
        setSelectedTime12(newTime.format());
    };
    const handleTimeChange13 = (newTime) => {
        setSelectedTime13(newTime.format());
    };
    const handleTimeChange14 = (newTime) => {
      
        setSelectedTime14(newTime.format());
    };


    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);


    const handleClickOpen = () => {
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
    // const [errors, setError] = useState({});
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
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyALPd9h01mpY-C9c8udBmFyYSn7oes2vDE&libraries=places`;
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

    const onHandleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateForm();
        
        if (isValid) {
            setLoader(true)
            const formData = new FormData();
            formData.append('category', catid)
            formData.append('service', value.servicename)
            formData.append('address', value.address)
            formData.append('state', stateid)
            formData.append('city', value.city)
            formData.append('pincode', value.pincode)
            formData.append('image', image)
            formData.append('latitude', coordinates.lat)
            formData.append('longitude', coordinates.lng)
            formData.append('image2', image2)
            formData.append('image3', image3)
            formData.append('description', value.description)
            formData.append('user_id', localStorage.getItem("pet_id"))

            formData.append('days', JSON.stringify(days));

            fetch(`${BASE_URL}/add_service`, {
                method: 'POST',
                body: formData,
            })
                .then((res) => {
                    // console.log(res)
                    setLoader(false)
                    if (res) {
                        navigate('/servicelistingpage')

                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log('Form validation failed');
        }
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
            console.log(selectedId, "ser");
            setCatid(selectedId)
            // Now you have the selected id, you can use it in your application logic
        }
    };
    const HandleChangeState = (selectedValue) => {
        if (selectedValue) {
            const selectedId = selectedValue.id;
            console.log(selectedId, "ser");
            setStateId(selectedId)
            // Now you have the selected id, you can use it in your application logic
        }
    };

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



    return (
        <div >
            <div>
               {loader && <CircularProgress color="success" style={{ position: "absolute", top: "50%", left: "45%", transform: "translateY(-50%)" ,zIndex :"12"}} />}
            </div>
            {scriptLoaded && (

                <div className='mx-2'>
                    <form onSubmit={handleSubmit} method='POST'>


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
                            {errors.category && <span className="text-danger">{errors.category}</span>}
                        </div>

                        <div className='my-2'>
                            <CustomInput name="servicename" placeholder="Service Title" onChange={onHandleChange} />
                            {errors.servicename && <span className="text-danger">{errors.servicename}</span>}
                        </div>
                        <p>Add Google Location</p>
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
                                        {suggestions.map((suggestion, index) => {
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
                                                    key={index}
                                                >
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        {errors.places && <span className="text-danger">{errors.places}</span>}
                        <div className='my-2'>
                            <CustomInput name="address" placeholder="Add Address" onChange={onHandleChange} />
                            {errors.address && <span className="text-danger">{errors.address}</span>}
                        </div>
                        <div className='my-2'>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={state}
                                getOptionLabel={(option) => option.name}
                                getOptionSelected={(option, value) => option.id === value.id}
                                sx={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    border: "1px solid #757575",
                                    boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)",
                                }}
                                className='my-2'
                                renderInput={(params) => <TextField {...params} label="State" />}
                                name="state"
                                onChange={(event, value) => HandleChangeState(value)} // Pass only the value
                            />
                            {errors.state && <span className="text-danger">{errors.state}</span>}
                        </div>
                        <div className='row'>
                            <div className='my-2 col-6'>
                                <CustomInput name="city" placeholder="City" onChange={onHandleChange} />
                                {errors.city && <span className="text-danger">{errors.city}</span>}
                            </div>
                            <div className='my-2 mx-2 col-5'>
                                <CustomInput name="pincode" placeholder="Pincode" onChange={onHandleChange} />
                                {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
                            </div>
                        </div>

                        <div className='row text-center my-4 justify-content-evenly'>
                            <p>Service Images</p>
                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                <p id='uptext1' >Upload 1</p>
                                <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                                {errors.image && <span className="text-danger">{errors.image}</span>}
                            </div>
                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                <p id='uptext2' >Upload 2</p>
                                <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload2} />
                                {errors.image2 && <span className="text-danger">{errors.image2}</span>}
                            </div>
                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                <p id='uptext3' >Upload 3</p>
                                <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                <input type='file' placeholder='upload' onChange={handleUpload3} />
                                {errors.image3 && <span className="text-danger">{errors.image3}</span>}
                            </div>
                        </div>

                        <div className='my-2'>
                            <PrimaryButton children="Add Timings" type="button" onClick={handleClickOpen} />
                            {errors.selectedTime && <span className="text-danger">{errors.selectedTime}</span>}
                            <Dialog
                                fullScreen
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Transition}
                            >
                                <AppBar sx={{ position: 'relative', background: "green" }}>
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
                                                            <MobileTimePicker defaultValue={day.start} onChange={(newTime) => day.handler(newTime)} />
                                                            {/* <TimePicker label="Basic time picker" onChange={(newTime) => day.handler(newTime)} /> */}
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
                            <CustomTextarea className="my-2" placeholder="Add Description" name="description" onChange={onHandleChange} />
                            {errors.description && <span className="text-danger">{errors.description}</span>}
                        </div>
                        <div>
                            <PrimaryButton children="submit" type="submit" />
                        </div>
                    </form>
                    <div className='text-center py-3'>
                        <Link to="/servicelistingpage" className='text-success'>View All Services</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddService