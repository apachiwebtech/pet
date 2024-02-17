import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/BaseUrl'
import logo from '../../image/petlogo.png'
import Radio from '@mui/material/Radio';
import { Alert, Checkbox } from '@mui/material';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const generateOTP = (length) => {

    const characters = '123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    return otp;
};



const Register = () => {


    const [value, setValue] = useState({
        email: '',
    })
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState('1');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // alert(selectedValue)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };


    const handleGenerateOTP = () => {
        const generatedOTP = generateOTP(4); // Change 6 to the desired length of OTP
        setOTP(generatedOTP);


    };







    const onhandlesubmit = (e) => {

        e.preventDefault();

        if (selectedValue == '1') {

            const data = {
                email: value.email,
                otp: otp
            }

            if (value.email !== "" && isChecked) {
                axios.post(`${BASE_URL}/login`, data)
                    .then((res) => {
                        navigate('/otp')
                        const id = res.data[0].email; // Define id here
                        const value = res.data[0].value; // Define id here
                        // const role = res.data[0].role; 
                        const otp = res.data[0].otp;
                        localStorage.setItem("pet_email", id)
                        localStorage.setItem("pet_value", value)
                        localStorage.setItem("pet_role", 1)
                        localStorage.setItem('otp', otp)

                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
            else {
                if (!value.email) {
                    setError(true)
                    setTimeout(() => {
                        setError(false)

                    }, 5000);

                }
                if (!isChecked) {
                    setError2(true)
                    setTimeout(() => {
                        setError2(false)

                    }, 5000);

                }
            }
        } else {
            const data = {
                email: value.email,
                otp: otp
            }

            if (value.email !== "" && isChecked) {
                axios.post(`${BASE_URL}/provider_login`, data)
                    .then((res) => {
                        navigate('/otp')
                        const id = res.data[0].email; // Define id here
                        const value = res.data[0].value; // Define id here
                        const otp = res.data[0].otp;
                        console.log(otp)
                        // console.log(role)
                        localStorage.setItem("pet_email", id)
                        localStorage.setItem("pet_value", value)
                        localStorage.setItem("pet_role", 2)
                        localStorage.setItem('otp', otp)


                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
            else {
                if (!value.email) {
                    setError(true)
                    setTimeout(() => {
                        setError(false)

                    }, 5000);

                }
                if (!isChecked) {
                    setError2(true)
                    setTimeout(() => {
                        setError2(false)

                    }, 5000);

                }
            }

        }




    }








    const onhandlechange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleChange2 = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className='reg-main px-4' >
            {error && <Alert style={{ position: "absolute", top: "74px" }} severity='warning'>Enter email</Alert>}
            {error2 && <Alert style={{ position: "absolute", top: "134px", width: "300px" }} severity='warning'> Please check the box to agree to our terms before proceeding.</Alert>}

            <div className='text-center py-5'>
                <img src={logo} width="100px" alt='' />
            </div>


            <div className='' style={{ background: "#f0f0f0", borderRadius: "5px" }} >
                <div className='mobile-detail p-2'>
                    <div className='py-2'>
                        <h2 className='mb-0'>Welcome to Pets</h2>
                        <span style={{ fontSize: "10px" }}>Pets make great companions..</span>
                    </div>

                    <div className=''>
                        <span className='py-2' style={{ fontWeight: "700", color: "lightslategrey" }} >Email</span>
                        <input className='mob-no' type='email' value={value.email} name='email' onChange={onhandlechange} placeholder='Enter Email' required />
                    </div>
                </div>


                <div className='row py-2'>
                    <div className='col-6'>
                        <Radio
                            checked={selectedValue === '1'}
                            onChange={handleChange}
                            id='pet'
                            sx={{
                                color: "#5DB15B", '&.Mui-checked': {
                                    color: "#5DB15B",
                                }
                            }}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <label htmlFor='pet' style={{ position: "static", transform: "translate(0px)", fontSize: "12px" }}>PET OWNER</label>

                    </div>
                    <div className='col-6'>

                        <Radio
                            checked={selectedValue === '2'}
                            onChange={handleChange}
                            id='service'
                            value="2"
                            sx={{
                                color: "#5DB15B", '&.Mui-checked': {
                                    color: "#5DB15B",
                                }
                            }}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <label htmlFor="service" style={{ position: "static", transform: "translate(0px)", fontSize: "12px" }}>SERVICE PROVIDER</label>

                    </div>

                </div>

            </div>
            <form onSubmit={onhandlesubmit} className='py-3'>
                <Checkbox sx={{
                    padding: "10px 0px", color: "#5DB15B", '&.Mui-checked': {
                        color: "#5DB15B",
                    }
                }} {...label} checked={isChecked}
                    onChange={handleChange2} /> <span>I agree to all terms and condition and privacy policy.</span>
                <div style={{ position: "relative" }}>

                    <button type='submit' className='reg-btn ' onClick={handleGenerateOTP}>
                        Register as<br /> {selectedValue === '1' ? <span className='color-blue'>PET OWNER</span> : <span className='color-blue'>SERVICE PROVIDER</span>}
                    </button>
                    <i className="bi bi-caret-right-fill arrow-btn2"></i>
                </div>
            </form>

            <div className='foot-info text-center'>
                <div>
                    <p style={{ fontSize: "12px" }}>(by registering, I agree to the Terms of <br /> Use and Privacy Policy)</p>
                </div>
                <div className='row py-2' >
                    <p className='col-6' onClick={handleClickOpen} style={{ color: "#5DB15B", fontWeight: "bold", fontSize: "12px", textDecoration: "underline" }}>Terms of Use </p>
                    <p className='col-6' onClick={handleClickOpen2} style={{ color: "#5DB15B", fontWeight: "bold", fontSize: "12px", textDecoration: "underline" }}>Privacy Policy </p>
                </div>

            </div>

            {/* Terms and use */}

            <React.Fragment>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar sx={{ background: "#5DB15B" }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Terms Of Use
                            </Typography>

                        </Toolbar>
                    </AppBar>

                    <div className='p-3'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ante euismod, porta tellus non, iaculis leo. Nulla mattis sed sem at luctus. In condimentum tellus et arcu elementum, sit amet dapibus felis commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non libero aliquam, tincidunt enim ut, aliquet risus. Nulla facilisi. Donec suscipit ullamcorper neque id gravida. Morbi eget sollicitudin sapien. Ut lorem mauris, egestas eget hendrerit pellentesque, varius nec neque. Morbi dui massa, pulvinar eu justo et, luctus imperdiet arcu. Mauris venenatis tincidunt erat, et rhoncus sem semper at. Integer nec felis id lorem suscipit tristique non ac nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lorem felis, elementum eget leo sed, tempor sollicitudin velit. In volutpat turpis purus, eu ultricies mauris malesuada a. Nulla eu sem sit amet quam commodo condimentum.
                        </p>
                        <br></br>
                        <p>
                            Etiam volutpat libero ac lobortis ultrices. Curabitur felis elit, semper quis elit in, semper mattis augue. Etiam egestas libero a accumsan suscipit. Sed eleifend, ex eget cursus blandit, erat sem pellentesque magna, vulputate gravida odio est eget erat. Aenean dictum augue vitae euismod lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam volutpat ligula sapien. Nam magna massa, fringilla ut mattis in, mattis sit amet ex. Nam erat augue, lacinia a lectus in, tempus interdum diam. Nulla facilisi. Mauris finibus posuere urna, ac iaculis est tincidunt euismod. Donec vitae accumsan dui, et pellentesque erat. In sed ante enim. Donec iaculis fermentum nisi, non sodales eros commodo sit amet. Ut id nisi iaculis, tristique dolor eu, pharetra mauris.</p>
                        <p>
                            <br></br>
                            Vestibulum lacinia libero turpis, id mollis odio ultricies non. Vestibulum vitae lacinia orci. Integer eu leo malesuada, mollis tortor ut, gravida ante. Nunc ultrices enim purus, vitae porttitor est mollis id. Suspendisse blandit massa ex, et iaculis ante tempor sit amet. Mauris at dignissim risus. Nullam sed rutrum lorem. Quisque euismod, orci eget blandit fringilla, enim quam ullamcorper leo, sit amet hendrerit tellus nisi non justo. Integer maximus viverra leo ut consequat. Donec pharetra vel magna at mattis. Morbi eget mi ac turpis mattis accumsan. Quisque commodo neque sed aliquet suscipit. Nam ut lectus ultrices, consequat magna non, posuere erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce iaculis libero eu ante laoreet, nec placerat ipsum interdum.</p>

                    </div>

                </Dialog>
            </React.Fragment>

            {/* Terms and Use end */}

            {/* Privacy Policy  */}
            <React.Fragment>
                <Dialog
                    fullScreen
                    open={open2}
                    onClose={handleClose2}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar sx={{ background: "#5DB15B" }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose2}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Privacy Policy
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <div className='p-3'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ante euismod, porta tellus non, iaculis leo. Nulla mattis sed sem at luctus. In condimentum tellus et arcu elementum, sit amet dapibus felis commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non libero aliquam, tincidunt enim ut, aliquet risus. Nulla facilisi. Donec suscipit ullamcorper neque id gravida. Morbi eget sollicitudin sapien. Ut lorem mauris, egestas eget hendrerit pellentesque, varius nec neque. Morbi dui massa, pulvinar eu justo et, luctus imperdiet arcu. Mauris venenatis tincidunt erat, et rhoncus sem semper at. Integer nec felis id lorem suscipit tristique non ac nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lorem felis, elementum eget leo sed, tempor sollicitudin velit. In volutpat turpis purus, eu ultricies mauris malesuada a. Nulla eu sem sit amet quam commodo condimentum.
                        </p>
                        <br></br>
                        <p>
                            Etiam volutpat libero ac lobortis ultrices. Curabitur felis elit, semper quis elit in, semper mattis augue. Etiam egestas libero a accumsan suscipit. Sed eleifend, ex eget cursus blandit, erat sem pellentesque magna, vulputate gravida odio est eget erat. Aenean dictum augue vitae euismod lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam volutpat ligula sapien. Nam magna massa, fringilla ut mattis in, mattis sit amet ex. Nam erat augue, lacinia a lectus in, tempus interdum diam. Nulla facilisi. Mauris finibus posuere urna, ac iaculis est tincidunt euismod. Donec vitae accumsan dui, et pellentesque erat. In sed ante enim. Donec iaculis fermentum nisi, non sodales eros commodo sit amet. Ut id nisi iaculis, tristique dolor eu, pharetra mauris.</p>
                        <p>
                            <br></br>
                            Vestibulum lacinia libero turpis, id mollis odio ultricies non. Vestibulum vitae lacinia orci. Integer eu leo malesuada, mollis tortor ut, gravida ante. Nunc ultrices enim purus, vitae porttitor est mollis id. Suspendisse blandit massa ex, et iaculis ante tempor sit amet. Mauris at dignissim risus. Nullam sed rutrum lorem. Quisque euismod, orci eget blandit fringilla, enim quam ullamcorper leo, sit amet hendrerit tellus nisi non justo. Integer maximus viverra leo ut consequat. Donec pharetra vel magna at mattis. Morbi eget mi ac turpis mattis accumsan. Quisque commodo neque sed aliquet suscipit. Nam ut lectus ultrices, consequat magna non, posuere erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce iaculis libero eu ante laoreet, nec placerat ipsum interdum.</p>

                    </div>
                </Dialog>
            </React.Fragment>

            {/* {Privacy Policy End} */}

        </div>
    )
}

export default Register