
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Utils/BaseUrl';
import { Link } from 'react-router-dom';
const ServiceRequest = () => {
    const [listing, setLising] = useState([])

    async function getlisitngdetail() {

        const data = {
            user_id: localStorage.getItem("pet_id")
        }

        axios.post(`${BASE_URL}/getservicereq_detail`, data)
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

    const handleClick = (id) => {

        const data = {
            request_id: id

        }

        axios.post(`${BASE_URL}/update_appoint`, data)
            .then((res) => {
                getlisitngdetail()
            })
            .then((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {
                listing.map((item) => {
                    const timestampStr = item.book_date; // Assuming item.book_date is the timestamp string
                    const timestamp = new Date(timestampStr);
                       console.log(timestamp)
                    // Extracting components
                    const dateComponent = timestamp.toLocaleDateString();
                    const timeComponent = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });




                    return (
                        <div className={`card p-2 m-3 ${item.status == 0 ? 'border-success' : 'border-danger'}`}>
                            <div className='d-flex'>
                                <div className='p-1 border border-1 mx-2' >
                                    <img src={`https://thetalentclub.co.in/pet-app/upload/subcategory/` + item.upload_image} width="100px" alt='' />
                                </div>
                                <div>
                                    <h2>{item.parent_name}</h2>
                                    <p>Date : {dateComponent}</p>
                                    <p>Time : {timeComponent}</p>

                                </div>
                            </div>
                            <hr />
                            <div className='d-flex'>
                                {item.status == 0 ?  <button className='btn btn-sm btn-success' onClick={() => handleClick(item.id)}>Accept</button>: <button className='btn btn-sm btn-danger' >Accepted</button>}
                               
                                <Link to="tel:9326476448" className='btn btn-sm btn-primary mx-2'><i class="bi bi-telephone"></i> Call</Link>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default ServiceRequest