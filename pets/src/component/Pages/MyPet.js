import React, {useState} from "react";
import petimg from "../../image/dogscaping.jpg";
import malesign from "../../image/download.png";
import PetsIcon from '@mui/icons-material/Pets';
import CustomInput from "../UI/CustomInput";
import PrimaryButton from "../UI/PrimaryButton";
import PetProfileForm from "../Forms/PetProfileForm";
import MaleIcon from '@mui/icons-material/Male';
const MyPet = () => {
  const [values, setValues] = useState({
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
    console.log(values);
    setValues({
      parent: "",
      address: "",
      state: "",
      city: "",
      pincode: ""
    });
  };
  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="pet-img">
        <img src={petimg} width="100%" height="auto" alt="" />
      </div>
      <div style={{ position: "relative" }}>
        <div
          className="d-flex justify-content-between align-items-center pet-name"
          style={{
            position: "absolute",
            top: "-40px",
            width: "100%",
            borderRadius: "50px",
            padding: "0 30px",
            background: "rgba(174, 174, 174,  0.4 )",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <div>
            <h3 style={{ color: "white" }}>Bella</h3>
            <p style={{ color: "#22a36b", fontWeight: "bold", fontSize: "1.2rem" }}>
              Border Collie
            </p>
          </div>
          <div className="gender-img">
            {/* <img src={malesign} alt="" /> */}<MaleIcon sx={{fontSize:"3rem", color:"#2e2e2e"}}/>
          </div>
        </div>
        <div style={{ position: "relative", top: "3em", padding:"0 10px", display:"flex", flexDirection:"row", alignItems:"center" }}>
        <div style={{ display: "flex", justifyItems: "center", gap:"1em" }}>
          <span><PetsIcon style={{padding:"0"}}/></span>
          <h4 >About Bella</h4>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", padding:"10px", gap:"10px", flexWrap:"wrap", marginTop:"10px", justifyContent:"center"}}>

    

         
        <div style={{ position: "relative", top: "3em", padding:"", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundColor:"#d9ffe3", height:"4rem", width:"4.3rem", borderRadius:"10px", borderBottom:"3px solid #22a36b", fontSize:"0.8rem" }}>

        <p style={{ margin: "0" }}>Species</p>
            <span style={{ margin: "0", fontWeight:"bold", color:"#22a36b" }}>Dog</span>

        </div>
        <div style={{ position: "relative", top: "3em", padding:"", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundColor:"#d9ffe3", height:"4rem", width:"4.3rem", borderRadius:"10px", borderBottom:"3px solid #22a36b", fontSize:"0.8rem" }}>

        <p style={{ margin: "0" }}>Age</p>
        <span style={{ margin: "0", fontWeight:"bold", color:"#22a36b" }}>1.7 y</span>

        </div>
        <div style={{ position: "relative", top: "3em", padding:"", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundColor:"#d9ffe3", height:"4rem", width:"4.3rem", borderRadius:"10px", borderBottom:"3px solid #22a36b", fontSize:"0.8rem" }}>

        <p style={{ margin: "0" }}>Weight</p>
        <span style={{ margin: "0", fontWeight:"bold", color:"#22a36b" }}>7.5 kg</span>

        </div>
        <div style={{ position: "relative", top: "3em", padding:"", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundColor:"#d9ffe3", height:"4rem", width:"4.3rem", borderRadius:"10px", borderBottom:"3px solid #22a36b", fontSize:"0.8rem" }}>

        <p style={{ margin: "0" }}>Height</p>
        <span style={{ margin: "0", fontWeight:"bold", color:"#22a36b" }}>54 cm</span>

        </div>
        <div style={{ position: "relative", top: "3em", padding:"", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundColor:"#d9ffe3", height:"4rem", width:"4.3rem", borderRadius:"10px", borderBottom:"3px solid #22a36b", fontSize:"0.8rem" }}>

        <p style={{ margin: "0" }}>Color</p>
        <span style={{ margin: "0", fontWeight:"bold", color:"#22a36b" }}>Black</span>

        </div>
       
        
        </div>
        <PetProfileForm/>
              </div>
    </div>
  );
};

export default MyPet;
