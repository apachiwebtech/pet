import React,{useEffect, useState} from 'react'
import CommunityCard from '../SubComponents/CommunityCard';
import axios from 'axios';
const Community = (props) => {

  const [data, setData] = useState([]);

  const getCommunityData = () => {
    const userid = localStorage.getItem('pet_id');
    console.log(userid)
    const data = { userid: userid }; // Replace with the desired user ID
  
    axios.post('http://localhost:8081/getPetProfiledata', data)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getCommunityData();
  }, []);

  return (
    <div style={{height:"calc(90vh)", overflow:"auto", marginTop:"", paddingBottom:"45px"}}>
        {/* <Card
        style={{
          width: "100%",
          height: "300px",
          padding: "20px",
          boxSizing: "border-box",
          marginBottom: "25px",
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
              src={props.img}
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
               <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                    <span>Breed</span>
                    <span>Gender</span>
                    <span>Age</span>
                    <span>Location</span>
               </div>
               <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
               <span>Kutta</span>
                    <span>Male</span>
                    <span>3</span>
                    <span>Andheri</span>
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
    justifyContent: "flex-end", 
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
    <FavoriteIcon />
    <ChatBubbleIcon />
    <BookmarkIcon />
  </div>
</div>

        </Card>
      </Card> */}
      {
        data.map((item)=>{
          return (
            <CommunityCard heading={item.pet_name} gender={item.gender} city={item.city} breed={item.breed} date={item.dob}/>
          )
        })
      }
        </div>
  )
}

export default Community