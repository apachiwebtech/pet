import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ListingCard from "../SubComponents/LisitingCard";
import SearchField from "../UI/SearchField";
import axios from "axios";
import { BASE_URL } from "../Utils/BaseUrl";
const BusinessListing = () => {
  const [search, setSearch] = useState('')
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {link, id } = useParams();
  console.log(link)
  console.log(id)

 
  const returnHeading=(id)=>{
    switch (id) {
      case '5' : 
      return 'Top Clinics'
      case '6' : 
      return 'Top Groomers'
      case '7' : 
      return 'Top Walkers'
      case '8' : 
      return 'Top Boarders'
      case '9' : 
      return 'Top Trainers'
      default : 
      return ''
    }
  }
  let heading = "";
  
   heading =  returnHeading(id);

  
  useEffect(()=>{
    axios.get(`${BASE_URL}/listing/${id}`)
    .then((res)=>{
      console.log(res.data);
      setListData(res.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err);
    })
  },[])



  return (
    <>
      <div style={{ margin: "10px 10px", position: "sticky", zIndex: "100" }}>
        <SearchField setSearch={setSearch}/>
      </div>
      <div
        style={{
          backgroundColor: "",
          padding: "",
          overflow: "hidden",
          height: "calc(100vh - 150px)",
          position: "relative",
        }}
      >
        {loading && <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
          <CircularProgress color="success"/>
        </div>}
        <div
          style={{
            overflowY: "scroll",
            height: "100%",
            position: "absolute",
            width: "100%",
            top: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              overflowY: "scroll",
              padding: "10px",
              paddingBottom: "80px",
            }}
          >
            {listData?.filter((item) => (item.title.toLowerCase()).includes(search.toLowerCase())).map((item,index) => {
                const ratings = item.post_rating.map(Number);

                // Calculate the average
                const averageRating = ratings.length > 0
                  ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
                  : 0;

           
                  
              return (
                <ListingCard key={item.id} title={item.title} rating={averageRating.toFixed(2)} heading={item.heading  || `${heading}`} date={item.date || ''} img={`https://thetalentclub.co.in/pet-app/upload/subcategory/` + item.upload_image} altText={item.alt || "alternate image"} id={item.id}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessListing;
