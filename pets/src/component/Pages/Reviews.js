import { Box, Modal, Rating, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import classes from "./Reviews.module.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "../UI/Card";
import PrimaryButton from "../UI/PrimaryButton";
import { MemoIzedModal } from "../UI/MemoIzedModal";
import { Rating as Rating2 } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomLinearProgress from "../UI/LinearProgressBar";
import { BASE_URL } from "../Utils/BaseUrl";


const Reviews = () => {
  const [open, setOpen] = React.useState(false);
  const [commentData, setCommentData] = useState([]);
  const { id } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const commnetRef = useRef("");

  const [poor, setPoor] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [good, setGood] = useState(0);
  const [veryGood, setVeryGood] = useState(0);
  const [excellent, setExcellent] = useState(0);

  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };
  const handleCommentSubmuit = (event) => {
    event.preventDefault();

    const comment = {
      pet_id: localStorage.getItem("pet_id"),
      serviceProviderId: id,
      comment: commnetRef.current.value,
      rating: rating,
    };

    console.log(comment);
    axios
      .post(`${BASE_URL}/addComment`, comment)
      .then((res) => {
        console.log(res.data);
        getComments(id);
      })
      .catch((err) => {
        console.log(err);
      });

    setRating(1);
    handleClose();
  };

  const getComments = (id) => {
    axios
      .get(`${BASE_URL}/getComments/${id}`)
      .then((res) => {
        setCommentData(res.data.reverse());
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getComments(id);
  }, [id]);

  function getTimeDifference(timestamp) {
    const currentTime = new Date();
    const pastTime = new Date(timestamp);
    const timeDifference = Math.abs(currentTime - pastTime);

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    }
  }
  const totalRating = Number(
    commentData.reduce((accumulator, review) => accumulator + review.rating, 0)
  );
  const average = Number(totalRating / commentData.length);
  console.log(average.toFixed(1));

  const ratingCalc = (data) => {
    const ratings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    data.forEach((comment) => {
      ratings[comment.rating] += 1;
    });

    setPoor(ratings[1]);
    setAverageRating(ratings[2]);
    setGood(ratings[3]);
    setVeryGood(ratings[4]);
    setExcellent(ratings[5]);
  };

  useEffect(() => {
    ratingCalc(commentData);
  }, [commentData]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="container">
      <div className={classes.header}>

        <h1>
          {
            isNaN(average) ? '' : (average.toFixed(1))
          }

        </h1>
        {
          isNaN(average) ? <></> : (

            <>
              <Rating value={average.toFixed(1)} precision={0.1} readOnly></Rating>

              <Typography variant="p">
                {`Based on ${commentData.length} reviews`}
              </Typography>
            </>
          )
        }

        <AddBoxIcon
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            fontSize: "2.5rem",
          }}
          onClick={handleOpen}
        />
      </div>
      {
        commentData.length === 0 ? (<h6 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "" }}>Be the first to comment and rate</h6>) : (
          <>

            <div className={classes.meterContainer}>
              {/* <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between"}}>

            <p style={{padding:"0", margin:"0"}}>Excellent</p>
            <meter value={excellent} min="1" low='2' high='5' max="5" style={{marginLeft:"auto", width:"70%", color:"red"}}>{`${excellent} out of 5`}</meter><br/>
            </div> */}
              <div
                className="d-flex flex-direction-row "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "0", margin: "0" }}>Excellent</p>

                <CustomLinearProgress value={excellent} color={'#6BC8A3'}></CustomLinearProgress>
              </div>
              <div
                className="d-flex flex-direction-row "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "0", margin: "0" }}>Very good</p>

                <CustomLinearProgress value={veryGood} color={'#A9D78C'}></CustomLinearProgress>

                <br />
              </div>
              <div
                className="d-flex flex-direction-row "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "0", margin: "0" }}>Good</p>
                <CustomLinearProgress value={good} color={'#FFD84C'} ></CustomLinearProgress>

                <br />
              </div>
              <div
                className="d-flex flex-direction-row "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "0", margin: "0" }}>Average</p>
                <CustomLinearProgress value={averageRating} color={'#FFB246'}></CustomLinearProgress>

                <br />
              </div>
              <div
                className="d-flex flex-direction-row "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "0", margin: "0" }}>Poor</p>
                <CustomLinearProgress value={poor} color={'#FF8B60'}></CustomLinearProgress>

                <br />
              </div>
            </div>

            <div className={classes.commentSection}>
              {commentData.map((item) => {
                return (
                  <Card className={classes.reviewCard}>
                    <div className={classes.cardHeading}>
                      <div className={classes.imageContainer}>
                        {item.image ? (
                          <img src="" alt="userImage" />
                        ) : (
                          <AccountCircleIcon
                            sx={{ height: "50px", width: "50px", color: "#b3b3b3" }}
                          />
                        )}
                      </div>
                      <div className={classes.user}>
                        <h4>{item.name || localStorage.getItem('awt_parent_name')}</h4>

                        <p>{getTimeDifference(item.created_at)}</p>
                      </div>
                    </div>

                    <div className={classes.comment}>
                      <Rating
                        value={Number(item.rating)}
                        precision={0.5}
                        readOnly
                      ></Rating>
                      <p>{item.comment}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </>

        )
      }
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
          <Typography variant="h5">User name</Typography>
          <Typography
            className="mb-2"
            id="modal-modal-title"
            variant="h6"
            component="h6"
            sx={{ color: "#757575" }}
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
                name="rating"
              />
            </div>
            <textarea
              rows={6}
              style={{ width: "100%" }}
              name="comment"
              ref={commnetRef}
            ></textarea>
          </form>
          <PrimaryButton
            form="commentForm"
            type="submit"
            style={{ marginTop: "1rem" }}
          >
            add comment
          </PrimaryButton>
        </Box>
      </MemoIzedModal>
    </div>
  );
};

export default Reviews;
