import React from 'react'

const Register = () => {
    return (
        <div className='reg-main px-3'>
            <div className='text-center'>
                <h4 className='reg-head'>REGISTER</h4>
            </div>
            <div className='row mobile-detail'>
                <div className='col-4'>
                    <p>Mobile No.</p>
                </div>
                <div className='col-8'>
                    <input className='mob-no' type='number' placeholder='Enter Valid 10 digits to get OTP' />
                </div>
            </div>
            <div className='row mobile-detail'>
                <div className='col-4'>
                    <p>Enter OTP</p>
                </div>
                <div className='col-8 otp-box '>
                    <input type='number' />
                    <input type='number' />
                    <input type='number' />
                    <input type='number' />
                </div>
                <div className='row text-center align-items-center'>
                    <p className='col-6'>1.45 secs Time remaining</p>
                    <p className='col-6'>Re-send OTP</p>
                </div>
            </div>
            <div className='text-center btn-sec' >
                <div style={{ position: "relative" }}>
                    <button className='reg-btn '>
                        Register as<br /> <span className='color-blue'>PET OWNER</span>
                    </button>
                    <i class="bi bi-caret-right-fill arrow-btn2"></i>
                </div>
                <div className='my-3' style={{ position: "relative" }}>
                    <button className='reg-service '>
                        Register as<br /> <span className='color-blue'>SERVICE PROVIDER</span>
                    </button>
                    <i class="bi bi-caret-right-fill arrow-btn2"></i>
                </div>
                <div>
                    <p>(by registering, I agree to the Terms of <br/> Use and Privacy Policy)</p>
                </div>
                <div className='row'>
                  <p className='col-6'>Terms of <br/> Use </p>
                  <p className='col-6'>Privacy <br/> Policy </p>
                </div>
                <div className='text-center splash-bt-text mx-3'>
        <p>design & developed by pet owners</p>
      </div>
            </div>
        </div>
    )
}

export default Register