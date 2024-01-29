import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import TodayIcon from "@mui/icons-material/Today";
import Rating from "@mui/material/Rating";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Rating as Rating2 } from "react-simple-star-rating";
import { DUMMY_DATA } from "../../Dummy_Data";
import Card from "../UI/Card";
import PrimaryButton from "../UI/PrimaryButton";
import distance from "../Utils/DistaceCalc";
import classes from "./DetailPage.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { MemoIzedModal } from "../UI/MemoIzedModal";
import axios from "axios";
import { BASE_URL } from "../Utils/BaseUrl";
const DetailPage = () => {
  const { id } = useParams();
  const serviceProvider = DUMMY_DATA.find((itm) => itm.id === id);
  const [open, setOpen] = useState(false);

  const [recommenderFor, setRecommendedFor] = useState([]);
  const [detail, setDetail] = useState({});
  console.log("component rerendered");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

  useEffect(()=>{
    axios.get(`${BASE_URL}/detailPage/${id}`)
    .then((res)=>{
      console.log(res.data);
      setDetail(res.data[0]);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])

  useEffect(()=>{
    axios.get(`${BASE_URL}/recommendedFor/${id}`)
    .then((res)=>{
      console.log(res.data);
      setRecommendedFor(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [id])
  console.log(detail.address)

  const handleCommentSubmuit=(event)=>{

    event.preventDefault();

    const comment = {
        comment : commnetRef.current.value,
        rating: rating,
    }

    console.log(comment);

    
    setRating(1);

    handleClose();
  }

  const commnetRef = useRef('');

  
  return (
    <div className={classes.Container}>
      <div className={classes.imageContainer}>
        <img
          src={serviceProvider.imageSrc}
          width="100%"
          alt="DetailImage"
          style={{ objectFit: "contian" }}
        />
      </div>
      <div className={classes.contentContainer}>
        
        <Card
          style={{
            width: "100%",
            height: "180px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: "1",
          }}
        >

          <h3 style={{ padding: "0", margin: "0", fontWeight: "bold" }}>
            {detail.title}
          </h3>

          <h5 style={{ padding: "0", margin: "0", color: "#006699" }}>
            {detail.designation}
          </h5>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "",
              gap: "10px",
            }}
          >
            <p style={{ margin: "0" }}>{detail.rating}</p>
            <Rating
              name="half-rating"
              defaultValue={0}
              value={serviceProvider.rating}
              precision={0.5}
              readOnly
            />
           {detail.reviews ?  ( <p style={{ margin: "0", color: "#757575" }}>
              ({detail.reviews || ""})
            </p>) : ""}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#757575",
              }}
            >
              <AccessAlarmsIcon sx={{ fontSize: "1rem" }} /> Monday-Friday 10:00
              AM - 5:00 PM
            </p>
            <p
              style={{
                margin: "0",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#757575",
              }}
            >
              <LocationOnIcon sx={{ fontSize: "1rem" }} />
              {distance(
                localStorage.getItem("latitutde"),
                detail.latitude,
                localStorage.getItem("longitude"),
                detail.longitude
              ).toFixed(2)}{" "}
              km
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6 style={{ margin: "0", color: "rgb(62, 179, 108)" }}>
              Location : {detail.city}
            </h6>
            <div className="d-flex flex-row gap-2 align-items-center">
              <span>
                <FavoriteIcon sx={{ color: "#cc2944" }} />
              </span>
              <p style={{ margin: "0", fontSize: "" }}>
                <NavLink to={`/reviews/${serviceProvider.id}`} style={{color:"#757575"}}>

                <ModeCommentOutlinedIcon/>
                </NavLink>
              </p>
            </div>
          </div>
        </Card>
        <div className={classes.subContentContainer}>
          <p>{detail.description}</p>
          <div className={classes.tagsContainer}>
            <h6>Recommended for :</h6>
            <div className={classes.tags}>
              {recommenderFor.map((item) => {
                return <span key={item.id}>{item.recommended_for}</span>;
                // console.log(item.recommended_for)
              })}
            </div>
          </div>
          <NavLink to={`/bookappointment/${id}`} style={{ textDecoration: "none" }}>
            <PrimaryButton
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              Book Appointment
              <TodayIcon />
            </PrimaryButton>
          </NavLink>
        </div>
      </div>
      <MemoIzedModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Box sx={style}>
            <Typography variant="h5">
               User name
            </Typography>
          <Typography
            className="mb-2"
            id="modal-modal-title"
            variant="h6"
            component="h6"
            sx={{color:"#757575"}}
          >
            Share more about your experience!
          </Typography>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            id="commentForm"
            onSubmit={handleCommentSubmuit}
          >
            <div
              style={{
                width: "100%",
                minHeight: "80px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rating2
                onClick={handleRating}
                initialValue={rating}
                name='rating'
                
              />
            </div>
            <textarea rows={6} style={{ width: "100%" }} name='comment' ref={commnetRef}></textarea>
          </form>
          <PrimaryButton form="commentForm" type="submit" style={{ marginTop: "1rem" }}>
            add comment
          </PrimaryButton>
        </Box>
      </MemoIzedModal>
    </div>
  );
};

export default DetailPage;
