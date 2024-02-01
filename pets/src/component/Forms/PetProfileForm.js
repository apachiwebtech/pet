import React,{useState, useEffect} from 'react'
import CustomInput from '../UI/CustomInput'
import PrimaryButton from '../UI/PrimaryButton'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from '../Utils/BaseUrl';
const PetProfileForm = (props) => {

  const [values, setValues] = useState({
    id: '', // Initialize ID as empty string
    parent: props.parentName || '',
    address: props.address || '',
    state: props.state || '',
    city: props.city || '',
    pincode: props.pincode || '',
    pet:props.petName || '',
    mobile : props.mobile || '',
  });

  useEffect(() => {
    // Generate UUID for the user ID on component mount
    setValues((prevValues) => ({
      ...prevValues,
      id: localStorage.getItem('pet_id') // Assign UUID to id in state
    }));
  }, []); // This effect runs only once on component mount

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const newDate = new Date(props.date)
  const day = newDate.getDate();
const month = newDate.getMonth() + 1; // Months are zero-indexed, so we add 1
const year = newDate.getFullYear();

const date = `${year}-${month}-${day}`;
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('userId', values.id);
    formData.append('parent', values.parent);
    formData.append('address', values.address);
    formData.append('state', values.state);
    formData.append('city', values.city);
    formData.append('pincode', values.pincode);
    formData.append('pet', values.pet);
    formData.append('mobile', values.mobile);
    formData.append('image', props.image);
    formData.append('color', props.color);
    formData.append('breed', props.breed);
    formData.append('height', props.height);
    formData.append('weight', props.weight);
    formData.append('gender', props.gender);
    formData.append('date', date);

    console.log(formData);
    const user = {
      userId: values.id,
      parent: values.parent,
      address: values.address,
      state: values.state,
      city: values.city,
      pincode: values.pincode,
      pet:values.pet,
      image : props.image,
      breed : props.breed,
      color: props.color,
      height:props.height,
      weight:props.weight,
      date:date,
      gender:props.gender
    };

    axios
      .post(`${BASE_URL}/petProfile`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCommunity=()=>{
    const status = 1;
    const userid = localStorage.getItem('pet_id');
    const data = {
      status,
      userid
    }
    axios.put(`${BASE_URL}/updatePetProfile`, {data})
    .then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    
  }
  return (
<div style={{marginTop:"2em", padding:"10px 10px 30px 10px", backgroundColor:""}}>
            <form id="profileForm" onSubmit={handleSubmit} style={{width:"100%", display:"flex", gap:"20px", flexDirection:"column"}}>
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Parent's Name" name="parent" value={values.parent || props.parentName} defaultValue={props.parentName} onChange={handleChange} />
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Pets Name" name="pet" value={values.pet || props.petName} onChange={handleChange} />
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Address" name="address" value={values.address || props.address} onChange={handleChange}/>
                <div style={{display:"flex" , flexDirection:"row", gap:"10px" }}>

                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="State" name="state" value={values.state || props.state} onChange={handleChange}/>
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="City" name="city" value={values.city || props.city} onChange={handleChange}/>
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                  
                <CustomInput style={{ width: "30%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="PIN Code" name="pincode" value={values.pincode || props.pincode} maxLength='6' onChange={handleChange}/>
                <CustomInput style={{ width: "30%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Mobile" name="mobile" value={values.mobile || props.mobile} maxLength='10' onChange={handleChange}/>
                </div>
            </form>
            <div style={{marginTop:"20px", display:"flex",justifyContent:"space-between", gap:"10px", width:"100%", backgroundColor:""}}>
                <PrimaryButton type="submit" form="profileForm" >Save Profile</PrimaryButton>
                <PrimaryButton type="submit" onClick={addToCommunity} >Post to Community</PrimaryButton>              
            </div>
        </div>  )
}

export default PetProfileForm;