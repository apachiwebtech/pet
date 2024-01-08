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
import dayjs from 'dayjs';
import React, { useState } from 'react';
import CustomInput from '../UI/CustomInput';
import CustomTextarea from '../UI/CustomTexarea';
import PrimaryButton from '../UI/PrimaryButton';
import axios from 'axios';
import { BASE_URL } from '../Utils/BaseUrl';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddService = () => {
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
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
        servicecategory: '',
        servicename: '',
        description: '',
        address: '',
        image: '',
        image2: '',
        image3: '',
        day: '',
        ischeked: '',
        day2: '',
        ischeked2: '',
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


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheckboxChange = () => {
        setChecked(!isChecked); // Toggle the checkbox state

        // Send the value as 1 or 0 based on the checkbox state
        const valueToSend = isChecked ? 0 : 1;
        // Now, you can use the 'valueToSend' variable as needed.
        console.log(valueToSend);
    };

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


    const handleSubmit = (e) =>{
        e.preventDefault()

        const formData = new FormData();
        formData.append('category', value.servicecategory)
        formData.append('service', value.servicename)
        formData.append('address', value.address)
        formData.append('image', image)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.append('description', value.description)

        fetch(`${BASE_URL}/add_service`, {
            method: 'POST',
            body: formData,
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (

        <div className='mx-2'>
            <form onSubmit={handleSubmit} method='POST'>


                <div className='my-2'>
                    <CustomInput name="servicecategory" placeholder="Service Category" onChange={onHandleChange} />
                </div>
                <div className='my-2'>
                    <CustomInput name="servicename" placeholder="Service Name" onChange={onHandleChange} />
                </div>
                <div className='my-2'>
                    <CustomInput name="address" placeholder="Add Address" onChange={onHandleChange} />
                </div>
                <div className='row text-center my-4'>
                    <p>Service Images</p>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext1' style={{ zIndex: "-1", textAlign: "center" }}>Upload 1</p>
                        <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                        <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                    </div>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext2' style={{ zIndex: "-1" }}>Upload 2</p>
                        <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                        <input type='file' placeholder='upload' onChange={handleUpload2} />
                    </div>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext3' style={{ zIndex: "-1" }}>Upload 3</p>
                        <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                        <input type='file' placeholder='upload' onChange={handleUpload3} />
                    </div>
                </div>
                <div className='my-2'>
                    <PrimaryButton children="Add Timings" onClick={handleClickOpen} />
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

                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Monday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange2} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' onChange={handleCheckboxChange} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Tuesday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange3} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange4} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Wednesday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange5} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange6} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Thursday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange7} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange8} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Friday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange9} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange10} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Saturday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange11} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange12} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">Sunday</TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange13} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} onChange={handleTimeChange14} />

                                            </LocalizationProvider>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox {...label} defaultChecked className='text-danger' />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Dialog>
                </div>
                <div>
                    <CustomTextarea className="my-2" placeholder="Add Description" name="description" onChange={onHandleChange} />
                </div>
                <div>
                    <PrimaryButton children="submit" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddService