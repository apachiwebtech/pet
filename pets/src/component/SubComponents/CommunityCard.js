import React from 'react'
import Card from '../UI/Card'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PetsIcon from '@mui/icons-material/Pets';

const CommunityCard = (props) => {
  return (
<div className='container' style={{padding:"10px"}}>
        <Card
        style={{
          width: "100%",
          height: "300px",
          padding: "20px",
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            alignContent: "center",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          <span>
            {/* <PetsIcon sx={{ color: "#454545" }}></PetsIcon> */}
            <PetsIcon/>
          </span>
          <h4
            style={{
              margin: "0",
              padding: "0",
              fontWeight: "bold",
              color: "#454545",
              whiteSpace: "nowrap"
            }}
          >


            {props.heading || 'heading'}
          </h4>
        </div>
        <Card
          style={{
            height: "80%",
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "0.7fr 1fr",
            gridTemplateRows: "1fr 0.4fr",
            gap: "10px",
            gridRowGap: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={`http://thetalentclub.co.in/` + props.img}
              alt={props.altText}
              style={{
                objectFit: "contain",
                height: "100px",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "",
              lineHeight: "1rem",
              padding: "5px",
              position: "relative",
            }}
          >


            {/* <h6 style={{ margin: "0 0 0px 0", color: "#454545", whiteSpace: "wrap", fontSize: "1rem" }}>
              {props.title || "pet hehe"}
            </h6> */}

            {/* <p
              style={{
                fontSize: "0.7rem",
                margin: "0 0 0 0",
                color: "#adadad",
              }}
            >
              something about them
            </p> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: " 0 0 0",
                gap: "5px",
                width: "90%",
                position: "absolute",
                top: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
              </div>
            <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gridTemplateRows: "1fr"  ,
                  gridColumnGap:"10px",
                  padding: "0",
                  backgroundColor:"",
                  height:"100%",
                }}
              >
               <div style={{display:"flex", flexDirection:"column", gap:"5px", justifyContent:"space-between"}}>
                    <span>Breed</span>
                    <span>Gender</span>
                    <span>Age</span>
                    <span>Location</span>
               </div>
               <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
               <span>{props.breed}</span>
                    <span>{props.gender}</span>
                    <span>{props.age || "no age"}</span>
                    <span>{props.city}</span>
               </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "",
              fontSize: "0.9rem",
              padding: "0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#adadad",
            }}
          >
            {props.date || 'Behavior'}
          </div>
          <div
  style={{
    fontSize: "0.8rem",
    padding: "0",
    display: "flex",
    float: "right",
    alignItems: "center",
    justifyContent: "flex-end", // This will make the inner div float right and have flex-end alignment
    border: "none",
    backgroundColor: "",
    color: "black",
    width: "100%",
  }}
>
  <div
    style={{
      fontSize: "0.8rem",
      padding: "0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "none",
      backgroundColor: "",
      color: "black",
      width: "80%",
    }}
  >
    <FavoriteBorderOutlinedIcon />
    <ChatBubbleOutlineOutlinedIcon />
    <BookmarkBorderOutlinedIcon />
  </div>

  {/* <NavLink to='/bookappointment' style={{ textDecoration: "none", color: "black" }}>
    Book Appointment
  </NavLink> */}
</div>

        </Card>
      </Card>
        </div>  )
}

export default CommunityCard