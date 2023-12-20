import React from 'react'
import clinic from '../../image/clinic2.png';
import Card from '../UI/Card';
import Rating from "@mui/material/Rating";
import PrimaryButton from '../UI/PrimaryButton';
import classes from './DetailPage.module.css'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
const DetailPage = () => {
  return (
    <div className={classes.Container}>

    <div className={classes.imageContainer}>
        <img src={clinic} width="100%" alt="DetailImage" style={{objectFit:"contian"}}/>

    </div>
    <div className={classes.contentContainer}>
    <Card style={{width:"100%", height:"180px", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:"1"}}>
            <h3 style={{padding:"0", margin:"0", fontWeight:"bold"}}>Title</h3>

            <h5 style={{padding:"0", margin:"0", color:"#006699"}}>Designation</h5>

            <div style={{display:"flex", alignItems:"center",justifyContent:"", gap:"10px"}}>
               

                <p style={{margin:"0"}}>
                    5.0
                </p>
                <Rating sx={{padding:"0", margin:"0"}} value={4} size='small'></Rating>
                <p style={{margin:"0",color:"#757575"}}>
                    (150 reviews)
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p style={{margin:"0", fontSize:"0.75rem", display:"flex", alignItems:"center",gap:"5px", color:"#757575"}}>
                    <AccessAlarmsIcon sx={{fontSize:"1rem"}}/> monday-friday 10:00 AM - 5:00PM 
                </p >
                <p style={{margin:"0", fontSize:"0.75rem",display:"flex", alignItems:"center",gap:"5px", color:"#757575"}}>
                  <LocationOnIcon sx={{fontSize:"1rem"}}/>2.8km
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <h6 style={{margin:"0",color:"rgb(62, 179, 108)"}}>Location : Andheri</h6>
                <div className='d-flex flex-row gap-2 align-items-center'>

                <span><FavoriteIcon sx={{color:"#cc2944"}}/></span>
                <p style={{margin:"0", fontSize:""}}>Comment</p>
                </div>
            </div>
        </Card>
        <div className={classes.subContentContainer}>
            <p style={{padding:"0", margin:"0",fontSize:"0.8rem", color:"#454545"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
            <div className={classes.tagsContainer}>
                <h6>
                    Recommended for :
                </h6>
                <div className={classes.tags}>
                   
                    <span>CleanUp</span>
                    <span>Surgery</span>
                    <span>CleanUp</span>
                    <span>CleanUp</span>
                    
                    
                </div>
            </div>
            <PrimaryButton >Book Appointment</PrimaryButton>
        </div>
    </div>
    
    </div>
  )
}

export default DetailPage