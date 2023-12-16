import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'
import { BASE_URL } from '../Utils/BaseUrl'

const generateOTP = (length) => {
    const characters = '0123456789';
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

    const handleGenerateOTP = () => {
        const generatedOTP = generateOTP(4); // Change 6 to the desired length of OTP
        setOTP(generatedOTP);
    };


    const onhandlesubmit = (e) => {
        e.preventDefault();

        const data = {
            email: value.email,
            otp: otp
        }

        if(value.email  !== ""){
            axios.post(`${BASE_URL}/login`, data)
            .then((res) => {
                navigate('/otp')
                const id = res.data[0].email; // Define id here
                const value = res.data[0].value; // Define id here
                // const role = res.data[0].role; 
                const otp = res.data[0].otp;
                localStorage.setItem("pet_email" , id)
                localStorage.setItem("pet_value" , value)
                localStorage.setItem("pet_role" , 1)
                localStorage.setItem('otp', otp)
           
            })
            .catch((err) => {
                console.log(err);
            })
      
        }
        else{
            alert("enter email")
        }

     
    }
    const onhandleprovider = (e) => {
        e.preventDefault();

        const data = {
            email: value.email,
            otp: otp
        }

        if(value.email  !== ""){
            axios.post(`${BASE_URL}/provider_login`, data)
            .then((res) => {
                navigate('/otp')
                const id = res.data[0].email; // Define id here
                const value = res.data[0].value; // Define id here
                const otp = res.data[0].otp; 
                console.log(otp)
                // console.log(role)
                localStorage.setItem("pet_email" , id)
                localStorage.setItem("pet_value" , value)
                localStorage.setItem("pet_role" , 2)
                localStorage.setItem('otp', otp)

           
            })
            .catch((err) => {
                console.log(err);
            })
      
        }
        else{
            alert("enter email")
        }

     
    }



    const onhandlechange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className='reg-main px-3'>


                <div className='text-center'>
                    <h4 className='reg-head'>REGISTER</h4>
                </div>
                <div className='mobile-detail '>

                    <div className='mob-box'>
                        <label className='py-2' style={{ fontWeight: "700" }} >Email</label>
                        <input className='mob-no' type='email' value={value.email} name='email' onChange={onhandlechange}  placeholder='Enter Email' required />
                    </div>
                </div>

                <div className='text-center btn-sec' >
            <form onSubmit={onhandlesubmit}>
                    <div style={{ position: "relative" }}>
                        <button type='submit' className='reg-btn ' onClick={handleGenerateOTP}>
                            Register as<br /> <span className='color-blue'>PET OWNER</span>
                        </button>
                        <i className="bi bi-caret-right-fill arrow-btn2"></i>
                    </div>
            </form>
            <form onSubmit={onhandleprovider}>
                    <div className='my-3' style={{ position: "relative" }}>
                        <button type='submit' className='reg-service ' onClick={handleGenerateOTP}>
                            Register as<br /> <span className='color-blue'>SERVICE PROVIDER</span>
                        </button>
                        <i className="bi bi-caret-right-fill arrow-btn2"></i>
                    </div>
            </form>
                    <div className='foot-info'>
                        <div>
                            <p>(by registering, I agree to the Terms of <br /> Use and Privacy Policy)</p>
                        </div>
                        <div className='row'>
                            <p className='col-6'>Terms of <br /> Use </p>
                            <p className='col-6'>Privacy <br /> Policy </p>
                        </div>
                        <div className='text-center splash-bt-text mx-3'>
                            <p>design & developed by pet owners</p>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Register