import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Utils/BaseUrl';

const ProductRequest = () => {
    const [listing, setLising] = useState([])

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
  return (
    <div className='service-listing page p-3'>
            
                        <div className='service-card card p-3 my-2' >
                            <div className='d-flex justify-content-between ' style={{ borderBottom: "1px solid lightgrey" }}>
                                <h5>ooty Dog Food</h5>
                            
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Customer Name: <span>satyam</span></p>
                                    <p>Address: <span>Mumbai</span></p>
                                    <p>Date: <span>13-01-2024</span></p> 
                                    <p>Qty: <span>4</span></p>
                                </div>


                            </div>
                      
                        </div>
               
        </div>
  )
}

export default ProductRequest