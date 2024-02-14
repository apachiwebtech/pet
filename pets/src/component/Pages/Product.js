import React, { useEffect, useState } from 'react'
import CommunityCard from '../SubComponents/CommunityCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { BASE_URL } from '../Utils/BaseUrl';
import ListingCard from '../SubComponents/LisitingCard';
import ProductCard from '../SubComponents/ProductCard';
const Product = (props) => {

   
    const [listing, setLising] = useState([])
    const [loading, setLoading] = useState(true);


     async function getlisitngdetail() {
        setLoading(true)
     

        axios.get(`${BASE_URL}/product`)
            .then((res) => {
                setLising(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getlisitngdetail()
    }, [])

    return (
        <div style={{ height: "calc(90vh)", position: "relative", overflow: "auto", marginTop: "", paddingBottom: "45px" }}>
            {loading &&
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <CircularProgress color='success' />
                </div>
            }
            {!loading &&
                listing.map((item) => {
                    return (
                        <ProductCard heading={item.title}    date={item.created_date} img={item.upload_image} />
                    )
                })
            }
        </div>
    )
}

export default Product