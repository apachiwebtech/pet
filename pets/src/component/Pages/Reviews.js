import { Box, Modal, Rating, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import classes from './Reviews.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import { MemoIzedModal } from '../UI/MemoIzedModal';
import { Rating as Rating2 } from "react-simple-star-rating";
const Reviews = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const commnetRef = useRef('');

  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };
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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className='container'>
        <div className={classes.header}>
            <h1>4.3</h1>

            <Rating value={4.3} precision={0.5} readOnly></Rating>

            <Typography variant='p'>
                Based on 67 reviews
            </Typography>
            <AddBoxIcon sx={{position:"absolute", top:"0", right:"0", fontSize:"2.5rem" }} onClick={handleOpen}/>
        </div>

        <div className={classes.meterContainer}>
            <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between"}}>

            <p style={{padding:"0", margin:"0"}}>Excellent</p>
            <meter value="2" min="0" max="10" style={{marginLeft:"auto", width:"70%"}}>2 out of 10</meter><br/>
            </div>
            <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between"}}>

            <p style={{padding:"0", margin:"0"}}>Very good</p>
            <meter value="8" min="0" max="10" style={{marginLeft:"auto", width:"70%"}}>2 out of 10</meter><br/>
            </div>
            <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between"}}>

            <p style={{padding:"0", margin:"0"}}>Good</p>
            <meter value="7" min="0" max="10" style={{marginLeft:"auto", width:"70%"}}>2 out of 10</meter><br/>
            </div>
            <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between"}}>

            <p style={{padding:"0", margin:"0"}}>Average</p>
            <meter value="1" min="0" max="10" style={{marginLeft:"auto", width:"70%"}}>2 out of 10</meter><br/>
            </div>
            <div className='d-flex flex-direction-row ' style={{display:"flex",alignItems : 'center', justifyContent:"space-between", }}>

            <p style={{padding:"0", margin:"0"}}>Poor</p>
            <meter value="2" min="0" max="10" style={{marginLeft:"auto", width:"70%"}}>2 out of 10</meter><br/>
            </div>
           
        </div>

        <div className={classes.commentSection}>
          <Card className={classes.reviewCard} >
            <div className={classes.cardHeading}>
                  <div className={classes.imageContainer}>
                      <img src='' alt='images'/>
                  </div>
                  <div className={classes.user}>
                      <h4>
                        User Name
                      </h4>

                      <p>
                        45 seconds ago
                      </p>
                  </div>
            </div>

            <div className={classes.comment}>

              <Rating value={4.5} precision={0.5} readOnly></Rating>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Card>
          <Card className={classes.reviewCard} >
            <div className={classes.cardHeading}>
            <div className={classes.imageContainer}>
                      <img src='' alt='images'/>
                  </div>
                  <div className={classes.user}>
                      <h4>
                        User Name
                      </h4>

                      <p>
                        45 seconds ago
                      </p>
                  </div>
            </div>

            <div>

              <Rating value={4.5} precision={0.5} readOnly></Rating>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Card>
          
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
  )
}

export default Reviews