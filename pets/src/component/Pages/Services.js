import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import React, { useEffect } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Services = () => {
    const top100Films = [
        { title: 'Pune', year: 1994 },
        { title: 'Mumbai', year: 1972 },
        { title: 'Delhi', year: 1974 },
        { title: 'Goa', year: 2008 },
        { title: 'Jammu', year: 1957 },
        { title: "Patna", year: 1993 },
        { title: 'Gujrat', year: 1994 },

    ];
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function getSerach(){
       axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyD8fY81ec5_VSenvpqsTblv6Rf67fDJquc") 
       .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err)
       })
    }

    useEffect(()=>{
     getSerach()
    },[])
    return (
        <div className='mx-3 mt-3'>
            <Stack spacing={2} sx={{ width: "100%" }} className=''>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Specify Primary Location of providing Service"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
            <div className='area-covrage row d-flex justify-content-between mt-3 align-items-center'>
                <TextField id="outlined-basic" label="Area Coverage" variant="outlined" className=' col-7' />
                <PrimaryButton className='mt-2' style={{width:"100px"}}>Add +</PrimaryButton>

            </div>

            <div className='area-list mt-3'>
                <div className='custom-card  '>
                    <p className='text-light px-1 fw-semibold' style={{ background: "green" }}>Area list</p>
                    <div className='row '>
                        <p className='col-1 px-1'>1.</p>
                        <p className='col-8'>Andheri</p>
                    </div>
                    <div className='row px-1'>
                        <p className='col-1'>2.</p>
                        <p className='col-8'>Goregaon</p>
                    </div>
                </div>

            </div>

            <hr></hr>
            <div className='Timerow d-flex justify-content-between mt-3 align-items-end'>
                <div className='col-7'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker
                                label="Add Time"
                                viewRenderers={{
                                    hours: renderTimeViewClock,
                                    minutes: renderTimeViewClock,
                                    seconds: renderTimeViewClock,
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <PrimaryButton className='mt-2' style={{height:"inherit"}}>Add +</PrimaryButton>
            </div>
            <div className='custom-card p-2 row mt-3 text-center'>
                <p className='col-3'>07:30 pm</p>
                <p className='col-3'>08:30 pm</p>
                <p className='col-3'>09:30 pm</p>
                <p className='col-3'>10:30 pm</p>
                <p className='col-3'>11:30 pm</p>
                <p className='col-3'>10:30 pm</p>
            </div>
            <div className=''>
                <PrimaryButton>Add Service +</PrimaryButton>
            </div>
            <hr/>

            <div className='add-services mt-3 '>

                <React.Fragment >
                    <Button variant="outlined" onClick={handleClickOpen} sx={{ color: "green", border: "1px solid green" }}>
                        Add Services +
                    </Button>
                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}

                    >
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar sx={{ background: "green" }}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Add Service
                                </Typography>
                                <Button autoFocus color="inherit" onClick={handleClose}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <div className='area-covrage row d-flex justify-content-between m-3  align-items-center'>
                            <TextField id="outlined-basic" label="Add Services" variant="outlined" className=' col-7' />
                            <PrimaryButton className='mt-2 col-4 '>Add +</PrimaryButton>
                        </div>
                        <div className='custom-card mx-3'>
                            <p className='px-1 fw-semibold text-light' style={{ background: "green" }}>Services</p>
                            <div className='row'>
                                <p className='col-1 px-1'>1.</p>
                                <p className='col-8'>Andheri</p>
                            </div>
                            <div className='row px-1'>
                                <p className='col-1'>2.</p>
                                <p className='col-8'>Goregaon</p>
                            </div>

                        </div>
                    </Dialog>
                </React.Fragment>

            </div>
            <div className='position-fixed' style={{bottom : "0px", left :"0px"}}>
                <PrimaryButton className="" style={{width:"50%"}}>Submit</PrimaryButton>
            </div>
        </div>
    )
}

export default Services