import React from 'react'
import clinic from '../../image/clinic2.png';
import Card from '../UI/Card';
import Rating from "@mui/material/Rating";
import PrimaryButton from '../UI/PrimaryButton';
import classes from './DetailPage.module.css'
const DetailPage = () => {
  return (
    <div className={classes.Container}>

    <div className={classes.imageContainer}>
        <img src={clinic} width="100%" alt="DetailImage" style={{objectFit:"contian"}}/>

    </div>
    <div className={classes.contentContainer}>
    <Card style={{width:"100%", height:"180px", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:"1"}}>
            <h3 style={{padding:"0", margin:"0"}}>Title</h3>

            <h5 style={{padding:"0", margin:"0"}}>Designation</h5>

            <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                <p style={{margin:"0"}}>
                    5.0
                </p>
                <Rating sx={{padding:"0", margin:"0"}} value={4} size='small'></Rating>
                <p style={{margin:"0"}}>
                    (150 reviews)
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p style={{margin:"0", fontSize:"0.78rem"}}>
                    timing : monday-friday 10:00 AM - 5:00PM 
                </p >
                <p style={{margin:"0", fontSize:"0.78rem"}}>
                    2.8km away
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <h6 style={{margin:"0",}}>Location : Andheri</h6>
                <p style={{margin:"0", fontSize:""}}>Comment</p>
            </div>
        </Card>
        <div className={classes.subContentContainer}>
            <p style={{padding:"0", margin:"0",fontSize:"0.8rem"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
            <div className={classes.tagsContainer}>
                <h3>
                    tags
                </h3>
                <div className={classes.tags}>
                   
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                    <PrimaryButton>hello</PrimaryButton>
                </div>
            </div>
            <PrimaryButton style={{ width: "100%", marginTop: "10px", backgroundColor:"green", padding:"10px", border:"none", borderRadius:"5px" }}>Book Appointment</PrimaryButton>
        </div>
    </div>
    
    </div>
  )
}

export default DetailPage