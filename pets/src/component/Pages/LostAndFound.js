import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./lostFound.css";
import dog from "../../image/clinic1.png";
import axios from "axios";
const LostAndFound = () => {

  const [lostFoundData, setLostFoundData] = useState([]);

  const url = 'https://petjs.thetalentclub.co.in'

  const getLostFoundData=()=>{
    axios.get(`${url}/getLostFound`)
    .then((response)=>{
      console.log(response);
      setLostFoundData(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getLostFoundData();
  }, [])
  return (
    <div className="container lostfound">
      {
        lostFoundData.map((item)=>{
          return (
            <Card className="CardClass" key={item.id}>
        <div className="header">
          <h1>Missing Dog</h1>
          <p>Help us find our furry friend</p>
        </div>
        <div className="mainSection">
          <div className="imageContainer">
            <img src={`https://petjs.thetalentclub.co.in/uploads/lost_found/${item.image}`} alt="dogimage" />
          </div>

          <div className="info">
            <h2>{item.pet_name}</h2>
            <div
              className="d-flex flex-direction-row "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>Breed </p>
              <div style={{ width: "60%" }}>
                <p>: {item.breed}</p>
              </div>
            </div>
            <div
              className="d-flex flex-direction-row "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>Color</p>
              <div style={{ width: "60%" }}>
                <p>: {item.color}</p>
              </div>{" "}
            </div>
            {item.collar && <div
              className="d-flex flex-direction-row "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>Collar </p>
              <div style={{ width: "60%" }}>
                <p>: Yellow</p>
              </div>
            </div>}
            <div
              className="d-flex flex-direction-row "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ padding: "0", margin: "0" }}>Last seen </p>
              <div style={{ width: "60%" }}>
                <p>: {item.last_location}</p>
              </div>{" "}
            </div>

            <hr></hr>

            <p>
              {item.message}
            </p>
          </div>
        </div>
        <div className="foot">
          <h1>Contact details</h1>
          <h2 style={{ color: "#fffafa" }}>{item.contact}</h2>
        </div>
      </Card>
          )
        })
      }
    </div>
  );
};

export default LostAndFound;
