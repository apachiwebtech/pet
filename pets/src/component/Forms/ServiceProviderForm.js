import React, { useState } from 'react';
import CustomInput from '../UI/CustomInput'
import PrimaryButton from '../UI/PrimaryButton'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Utils/BaseUrl';
const ServiceProviderForm = () => {
    const [value, setValue] = useState({

    })

    const onhandleSubmit = (e) => {
        e.preventDefault();

        const data = {

        }

        axios.post(`${BASE_URL}/add_provider`, data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onHandleChange = (e) =>{
        setValue((prev)=>({...prev,[e.target.name] : e.target.value }))
    }

    return (
        <div className='mx-2'>
            <form onSubmit={onhandleSubmit}>
                <div>
                    <CustomInput className="my-2" placeholder="Category: <drop-down feild " onChange={onHandleChange} />
                    <CustomInput className="my-2" placeholder="Shop/Service Name" onChange={onHandleChange}/>
                    <CustomInput className="my-2" placeholder="Owner's Name" onChange={onHandleChange}/>

                    <div className='d-flex'>
                        <CustomInput className="my-2 mx-1" placeholder="Contact No 1" onChange={onHandleChange}/>
                        <CustomInput className="my-2 mx-1" placeholder="Contact No 2" onChange={onHandleChange}/>
                    </div>
                    <CustomInput className="my-2" placeholder="Address" onChange={onHandleChange}/>
                    <CustomInput className="my-2" placeholder="State"onChange={onHandleChange}/>

                    <div className=' row d-flex justify-content-between'>
                        <div className='col-7'>
                            <CustomInput className="my-2 " placeholder="city" onChange={onHandleChange}/>
                        </div>
                        <div className='col-4 '>
                            <CustomInput className="my-2 " placeholder="Pin Code" onChange={onHandleChange}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly '>
                        <div className='upload-box' style={{ position: "relative" }}>
                            <p>Upload 1</p>
                            <input type='file' placeholder='upload' />
                        </div>
                        <div className='upload-box' style={{ position: "relative" }}>
                            <p>Upload 2</p>
                            <input type='file' placeholder='upload' />
                        </div>
                        <div className='upload-box' style={{ position: "relative" }}>
                            <p>Upload 3</p>
                            <input type='file' placeholder='upload' />
                        </div>
                    </div>
                    <Link to="/"><PrimaryButton type="submit" children="Submit" className="mt-5" /></Link>
                </div>
            </form>
        </div>
    )
}

export default ServiceProviderForm