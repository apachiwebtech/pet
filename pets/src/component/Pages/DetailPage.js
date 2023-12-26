import React from 'react'
import clinic from '../../image/clinic2.png';
import Card from '../UI/Card';
import Rating from "@mui/material/Rating";
import PrimaryButton from '../UI/PrimaryButton';
import classes from './DetailPage.module.css'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TodayIcon from '@mui/icons-material/Today';
import { DUMMY_DATA } from '../../Dummy_Data';
import { NavLink, useParams } from 'react-router-dom';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import distance from '../Utils/DistaceCalc';
const DetailPage = () => {

    const {id} = useParams();

    console.log(id);
    const serviceProvider = DUMMY_DATA.find((itm) => itm.id === id);

    console.log(serviceProvider);

  return (
    <div className={classes.Container}>

    <div className={classes.imageContainer}>
        <img src={serviceProvider.imageSrc} width="100%" alt="DetailImage" style={{objectFit:"contian"}}/>

    </div>
    <div className={classes.contentContainer}>
    <Card style={{width:"100%", height:"180px", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:"1"}}>
            <h3 style={{padding:"0", margin:"0", fontWeight:"bold"}}>{serviceProvider.title}</h3>

            <h5 style={{padding:"0", margin:"0", color:"#006699"}}>Designation</h5>

            <div style={{display:"flex", alignItems:"center",justifyContent:"", gap:"10px"}}>
               

                <p style={{margin:"0"}}>
                    {serviceProvider.rating}
                </p>
                <Rating name="half-rating" defaultValue={0} value={serviceProvider.rating}precision={0.5} readOnly />
                <p style={{margin:"0",color:"#757575"}}>
                    ({serviceProvider.reviews})
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p style={{margin:"0", fontSize:"0.75rem", display:"flex", alignItems:"center",gap:"5px", color:"#757575"}}>
                    <AccessAlarmsIcon sx={{fontSize:"1rem"}}/> Monday-Friday 10:00 AM - 5:00 PM 
                </p >
                <p style={{margin:"0", fontSize:"0.75rem",display:"flex", alignItems:"center",gap:"5px", color:"#757575"}}>
                  <LocationOnIcon sx={{fontSize:"1rem"}}/>{distance(localStorage.getItem('latitutde'), serviceProvider.latitude, localStorage.getItem('longitude'), serviceProvider.longitude).toFixed(2)} km
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <h6 style={{margin:"0",color:"rgb(62, 179, 108)"}}>Location : {serviceProvider.location}</h6>
                <div className='d-flex flex-row gap-2 align-items-center'>

                <span><FavoriteIcon sx={{color:"#cc2944"}}/></span>
                <p style={{margin:"0", fontSize:""}}><ModeCommentOutlinedIcon/></p>
                </div>
            </div>
        </Card>
        <div className={classes.subContentContainer}>
            <p>
                {serviceProvider.description}
            </p>
            <div className={classes.tagsContainer}>
                <h6>
                    Recommended for :
                </h6>
                <div className={classes.tags}>
                   {
                    serviceProvider.recommendedFor.map((service)=>{
                        return (
                            <span>{service}</span>    
                        )
                        })
                   }
                </div>
            </div>
            <NavLink to='/bookappointment' style={{textDecoration:"none"}}>

            <PrimaryButton style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"center", gap:"10px"}} >
                Book Appointment<TodayIcon/>
                
                </PrimaryButton>
            </NavLink>
        </div>
    </div>
    
    </div>
  )
}

export default DetailPage