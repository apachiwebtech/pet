import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/BaseUrl'
import logo from '../../image/petlogo.png'
import Radio from '@mui/material/Radio';
import Alert from '@mui/material/Alert';




const generateOTP = (length) => {

    const characters = '123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    return otp;
};



const Login = () => {


    const [value, setValue] = useState({
        email: '',
    })

    const [otp, setOTP] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const[error2 , setError2] = useState(false)
    const [selectedValue, setSelectedValue] = React.useState('1');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // alert(selectedValue)
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

            if (value.email !== "") {
                axios.post(`${BASE_URL}/user_login`, data)
                    .then((res) => {
                        if (res.data[0].id) {
                            navigate('/otp')
                            const id = res.data[0].email; // Define id here
                            const value = res.data[0].value; // Define id here
                            // const role = res.data[0].role; 
                            const otp = res.data[0].otp;
                            localStorage.setItem("pet_email", id)
                            localStorage.setItem("pet_value", value)
                            localStorage.setItem("pet_role", 1)
                            localStorage.setItem('otp', otp)
                        }
                        else {
                            setError(true)
                            setTimeout(() => {
                                setError(false)
                                
                            },5000);
                        }
                        
                        
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    
                }
                else {
                    setError2(true)
                    setTimeout(() => {
                        
                        setError2(false)
                    }, 5000);
            }
        } else {
            const data = {
                email: value.email,
                otp: otp
            }

            if (value.email !== "") {
                axios.post(`${BASE_URL}/provid_login`, data)
                    .then((res) => {
                        if (res.data[0].id) {
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
                        }else{
                            setError(true)
                            setTimeout(() => {
                                setError(false)
                                
                            },5000);
                        }


                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
            else {
               setError2(true)
               setTimeout(() => {
                setError2(false)
            }, 5000);
            }

        }




    }








    const onhandlechange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className='reg-main px-4' >
            {error && <Alert severity="error" style={{position : "absolute",top:"74px"}}>Email id not found</Alert>}
            {error2 && <Alert severity="warning" style={{position : "absolute",top:"74px"}}>Enter email</Alert>}

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
                            value="1"
                            sx={{color :"#5DB15B", '&.Mui-checked': {
                                color:"#5DB15B" ,}}}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            />
                        <span>PET OWNER</span>
                    </div>
                    <div className='col-6'>

                        <Radio
                            checked={selectedValue === '2'}
                            onChange={handleChange}
                            sx={{color :"#5DB15B", '&.Mui-checked': {
                                color:"#5DB15B" ,}}}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <span>SERVICE PROVIDER</span>
                    </div>

                </div>

            </div>
            <form onSubmit={onhandlesubmit} className='py-3'>
                <div style={{ position: "relative" }}>

                    <button type='submit' className='reg-btn ' onClick={handleGenerateOTP}>
                        Login as<br /> {selectedValue === '1' ? <span className='color-blue'>PET OWNER</span> : <span className='color-blue'>SERVICE PROVIDER</span>}
                    </button>
                    <i className="bi bi-caret-right-fill arrow-btn2"></i>
                </div>
            </form>
            <p className='text-center'>Dont have a account? <Link to="/reg" style={{ color: "#5DB15B" }}>Sign Up</Link></p>

        </div>
    )
}

export default Login