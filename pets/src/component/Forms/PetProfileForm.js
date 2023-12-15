import React,{useState} from 'react'
import CustomInput from '../UI/CustomInput'
import PrimaryButton from '../UI/PrimaryButton'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const PetProfileForm = () => {

    const [values, setValues] = useState({
      id: uuidv4(), // Generate UUID for the user ID
        parent: "",
        address: "",
        state: "",
        city: "",
        pincode: ""
      });
    
      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
          userId:values.id,
          parent : values.parent,
          address : values.address,
          state : values.state,
          city : values.city,
          pincode : values.pincode,
        }

        axios.post(`http://localhost:8081/petProfile`, user)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
          console.log(err);
        })

        setValues({
          parent: "",
          address: "",
          state: "",
          city: "",
          pincode: ""
        });
      };
  return (
<div style={{marginTop:"4em", padding:"10px", backgroundColor:""}}>
            <form id="profileForm" onSubmit={handleSubmit} style={{width:"100%", display:"flex", gap:"20px", flexDirection:"column"}}>
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Parent's Name" name="parent" value={values.parent} onChange={handleChange} />
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="Address" name="address" value={values.address} onChange={handleChange}/>
                <div style={{display:"flex" , flexDirection:"row", gap:"10px" }}>

                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="State" name="state" value={values.state} onChange={handleChange}/>
                <CustomInput style={{ width: "100%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="City" name="city" value={values.city} onChange={handleChange}/>
                </div>
                <CustomInput style={{ width: "30%", padding: "10px", borderRadius: "8px" }} type="text" placeholder="PIN Code" name="pincode" value={values.pincode} maxLength='6' onChange={handleChange}/>
            </form>
            <div style={{marginTop:"20px", display:"flex",justifyContent:"space-between", gap:"20px", width:"100%", backgroundColor:""}}>
                <PrimaryButton type="submit" form="profileForm" style={{width:"100%", padding:"10px", borderRadius:"5px",backgroundColor:"#4acf7e", color:"white",border:"none",fontSize:"1.2rem"}}>Save Profile</PrimaryButton>
                <PrimaryButton type="submit" form="profileForm" style={{width:"100%", padding:"10px", borderRadius:"5px",backgroundColor:"#4acf7e",color:"white", border:"none",fontSize:"1.2rem"}}>Post to Community</PrimaryButton>              
            </div>
        </div>  )
}

export default PetProfileForm;