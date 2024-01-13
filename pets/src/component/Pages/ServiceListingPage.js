import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Utils/BaseUrl'

const ServiceListingPage = () => {
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
            {
                listing.map((item) => {
                    return (
                        <div className='service-card card p-3 my-2'>
                            <div className='d-flex justify-content-between ' style={{ borderBottom: "1px solid lightgrey" }}>
                                <h5>{item.title}</h5>
                                <span className='service-list-edit'>Edit Service</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Service Title: <span>{item.title}</span></p>
                                    <p>Add Address: <span>{item.address}</span></p>
                                    <p>Date: <span>{item.created_date}</span></p>
                                </div>


                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ServiceListingPage