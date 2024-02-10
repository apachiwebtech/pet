import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { BASE_URL } from '../Utils/BaseUrl'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Otp = () => {
    const [value, setValue] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
    })

    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(true);
    console.log(otp, "from ls")
    const generateOTP = (length) => {

        const characters = '123456789';
        let otp = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            otp += characters[randomIndex];
        }


        return otp;
    };

    const otp1Ref = useRef(null);
    const otp2Ref = useRef(null);
    const otp3Ref = useRef(null);
    const otp4Ref = useRef(null);

    useEffect(() => {


        setOtp(localStorage.getItem('otp'));
        // setTimeout(() => {
        //     setShowOtp(false);
        // }, 10000)

    }, []);
    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))

        // Move focus to the next input if a digit is entered
        if (value.length === 1) {
            switch (name) {
                case 'otp1':
                    otp2Ref.current.focus();
                    break;
                case 'otp2':
                    otp3Ref.current.focus();
                    break;
                case 'otp3':
                    otp4Ref.current.focus();
                    break;
                case 'otp4':
                    // The last input, you can perform additional actions if needed
                    break;
                default:
                    break;
            }
        }
    };

    const handleGenerateOTP = () => {
        const generatedOTP = generateOTP(4);

        const data = {
            otp: generatedOTP,
            email: localStorage.getItem("pet_email"),
            value: localStorage.getItem("pet_value"),
        }

        axios.post(`${BASE_URL}/resend`, data)
            .then((res) => {
                console.log(res)
                document.getElementById("msg").innerHTML = " <Stack sx={{ width: '100%' }} spacing={2}><Alert variant='outlined' severity='success'>Otp sent to your device!</Alert> </Stack>";
                setTimeout(() => {

                    document.getElementById("msg").innerHTML = "";
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handlepeoviderOTP = () => {
        const generatedOTP = generateOTP(4);

        const data = {
            otp: generatedOTP,
            email: localStorage.getItem("pet_email"),
            value: localStorage.getItem("pet_value"),
        }

        axios.post(`${BASE_URL}/resend_provider`, data)
            .then((res) => {

              console.log(res)

                document.getElementById("msg").innerHTML = " <Stack sx={{ width: '100%' }} spacing={2}><Alert variant='outlined' severity='success'>Otp sent to your device!</Alert> </Stack>";
                setTimeout(() => {

                    document.getElementById("msg").innerHTML = "";
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
            })
    };








    const onhandlesubmit = (e) => {
        const mergedOtp = Object.values(value).join('');
        e.preventDefault();

        const data = {
            otp: mergedOtp,
            email: localStorage.getItem("pet_email"),
            value: localStorage.getItem("pet_value"),
        }

        axios.post(`${BASE_URL}/otp`, data)
            .then((res) => {
                console.log(res)


                if (res.data.length == 0) {
                    document.getElementById("err").innerHTML = "<Stack sx={{ width: '100%' }} spacing={2}><Alert variant='outlined' severity='warning'>Please enter valid otp!</Alert></Stack>"
                    setTimeout(() => {

                        document.getElementById("err").innerHTML = ""
                    }, 2000)
                } else {

                    if(res.data[0].parent_name === null){
                        window.location.pathname = '/pet/:id';
                        
                    }
                    else{
                        window.location.pathname = '/';
                    }
                    // navigate('/')
                    // window.location.pathname = '/';
                    const role = res.data[0].role;
                    const value = res.data[0].value;
                    const id = res.data[0].id;

                    localStorage.setItem("pet_role", role)
                    localStorage.setItem("pet_value", value)
                    localStorage.setItem('pet_id', id);

                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onhandleprovider = (e) => {
        const mergedOtp = Object.values(value).join('');
        e.preventDefault();

        const data = {
            otp: mergedOtp,
            email: localStorage.getItem("pet_email"),
            value: localStorage.getItem("pet_value"),
        }

        axios.post(`${BASE_URL}/provider_otp`, data)
            .then((res) => {



                if (res.data.length == 0) {
                    document.getElementById("err").innerHTML = "<Stack sx={{ width: '100%' }} spacing={2}><Alert variant='outlined' severity='warning'>Please enter valid otp!</Alert></Stack>"
                    setTimeout(() => {

                        document.getElementById("err").innerHTML = ""
                    }, 2000)
                } else {
                    console.log(res.data)
                    if(res.data[0].fullname === null){
                        window.location.pathname = '/serviceproform';
                        
                    }
                    else{
                        window.location.pathname = '/';
                    }

                    const role = res.data[0].role;
                    const value = res.data[0].value;
                    const id = res.data[0].id;
                    localStorage.setItem("pet_role", role)
                    localStorage.setItem("pet_value", value)
                    localStorage.setItem('pet_id', id);

                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {

        if (localStorage.getItem('otp')) {
            console.log(otp)
            setOtp(localStorage.getItem('otp'));
        }
    }, [])
    return (
        <>
            {localStorage.getItem("pet_role") == 1 ? (
                <div className='reg-main px-3'>
                    <form onSubmit={onhandlesubmit}>


                        <div className='text-center'>
                            <h4 className='reg-head'>Otp</h4>
                        </div>

                        <div className=' mobile-detail mob-box'>
                            <div className=''>
                                <p style={{ fontWeight: "700" }}>Enter OTP</p>
                            </div>
                            <div className='otp-box d-flex justify-content-between'>
                                <input type='text' maxLength='1' name='otp1' ref={otp1Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp2' ref={otp2Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp3' ref={otp3Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp4' ref={otp4Ref} onChange={onHandleChange} />
                            </div>
                            <div className='  align-items-center otp-text pt-2'>
                                {/* <p className='col-6'>1.45 secs Time remaining</p> */}
                                <p className=' text-end' onClick={handleGenerateOTP}>Re-send OTP</p>

                            </div>
                        </div>
                        <div className='text-center btn-sec' >
                            <div className='text-center' style={{ position: "relative" }}>
                                <button type='submit' className='Verify-btn'>
                                    Verify
                                </button>

                                <i className="bi bi-caret-right-fill arrow-btn"></i>
                            </div>

                            <p className='text-danger' id="err"></p>
                            <div id='msg'>
                                {
                                    showOtp && <p>{otp}</p>
                                }
                            </div>

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
                    </form>
                </div>
            ) : (
                <div className='reg-main px-3'>
                    <form onSubmit={onhandleprovider}>


                        <div className='text-center'>
                            <h4 className='reg-head'>Otp</h4>
                        </div>

                        <div className=' mobile-detail mob-box'>
                            <div className=''>
                                <p style={{ fontWeight: "700" }}>Enter OTP</p>
                            </div>
                            <div className='otp-box d-flex justify-content-between'>
                                <input type='text' maxLength='1' name='otp1' ref={otp1Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp2' ref={otp2Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp3' ref={otp3Ref} onChange={onHandleChange} />
                                <input type='text' maxLength='1' name='otp4' ref={otp4Ref} onChange={onHandleChange} />
                            </div>
                            <div className='  align-items-center otp-text pt-2'>
                                {/* <p className='col-6'>1.45 secs Time remaining</p> */}
                                <p className=' text-end' onClick={handlepeoviderOTP}>Re-send OTP</p>
                            </div>
                        </div>
                        <div className='text-center btn-sec' >
                            <div className='text-center' style={{ position: "relative" }}>
                                <button type='submit' className='Verify-btn'>
                                    Verify
                                </button>

                                <i className="bi bi-caret-right-fill arrow-btn"></i>
                            </div>

                            <p className='text-danger' id="err"></p>
                            <div id='msg'>
                                {
                                    showOtp && <p>{otp}</p>
                                }
                            </div>

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
                    </form>
                </div>
            )
            }
        </>


    )
}

export default Otp