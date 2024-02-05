import React,{useEffect, useState} from 'react'
import CommunityCard from '../SubComponents/CommunityCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { BASE_URL } from '../Utils/BaseUrl';
const Community = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id)
  const getCommunityData = () => {
    const userid = localStorage.getItem('pet_id');
    console.log(userid)
    const data = { userid: userid }; // Replace with the desired user ID
  
    axios.get(`${BASE_URL}/getCommunityData`,)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getCommunityData();
  }, []);

  return (
    <div style={{height:"calc(90vh)", position:"relative",overflow:"auto", marginTop:"", paddingBottom:"45px"}}>
      { loading && 
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
          <CircularProgress color='success'/>
        </div>
      }
      {!loading && 
        data.map((item)=>{
          return (
            <CommunityCard heading={item.pet_name} gender={item.gender} city={item.city} breed={item.breed} date={item.dob} img={item.profile_image}/>
          )
        })
      }
        </div>
  )
}

export default Community