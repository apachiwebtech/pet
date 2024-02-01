import React, { useState, useRef, useEffect, useId } from "react";
import petimg from "../../image/dogscaping.jpg";
import PetsIcon from '@mui/icons-material/Pets';
import PetProfileForm from "../Forms/PetProfileForm";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import DropDown from "../UI/DropDown";
import axios from 'axios';
import { getColors, getBreeds } from "../../Store/DropDownActions";
import { useSelector, useDispatch } from 'react-redux'
import WeightHeightCal from "../UI/WeightHeightCal";
import { DateCalc } from "../UI/WeightHeightCal";
import { putPetGender, getProfileData } from "../../Store/PetFormActions";
import { AgeCalculator } from "../Utils/AgeCalculator";
const MyPet = () => {
  const userid = localStorage.getItem("pet_id")
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBreeds());

    dispatch(getColors());

    dispatch(getProfileData({id : userid}))
  }, [dispatch, userid])

  const breeds = useSelector((state)=> state.dropdown.breeds);
  const colors = useSelector((state)=> state.dropdown.colors);
  const genderState = useSelector((state)=> state.petform);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [openWeightHeightModal, setOpenWeightHeight] = useState(false);
  const [options, setOptions] = useState(breeds);
  const [selectedImage, setSelectedImage] = useState(petimg);
  const [imageToSend, setSelectedImageToSend] = useState('');
  const [stepType, setStepType] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male'); // Default to male
  const [openDateCalculator, setOpenDateCalc] = useState(false);
  const [date, setDate] = useState('');
  const [age, setAge] = useState(0);
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    // Trigger a click on the hidden file input
    fileInputRef.current.click();
  };

  const initialPetObject = {
    pet_name: "",
    breed: "",
    color: "",
    height: "",
    weight: "",
    gender: ""
  };
  
  const [petObject, setPetObject] = useState(initialPetObject);
  
  
  const handleOpen = (type) => {
    setOpen(true);
    if(type === 'breeds'){
      setOptions(breeds);
    }else{
      setOptions(colors);
    }
  };
  
  const handleWeightSave = (value) => {
    setWeight(value);
    console.log(weight);
  };

  const handleHeightSave = (value) => {
    setHeight(value);
    console.log(height);
  };

  const openWeightHeight=(type)=>{
    setOpenWeightHeight(true);
    setStepType(type);

  }

const openDateCalc = ()=>{
  setOpenDateCalc(true);
}
  
  const handleClose = () => {setOpen(false)
  setOpenWeightHeight(false);
  setOpenDateCalc(false);
  };
  const [selectedBreed, setSelectedBreed] = useState("");

  const [selectedColor, setSelectedColor] = useState("");

  // const handleSelectedOption = (option) => {
  //     setSelectedOption(option);
  //   };
  const handleSelectedOption = (option, type) => {
    if (type === 'breeds') {
      setSelectedBreed(option); 
    } else if (type === 'colors') {
      setSelectedColor(option);
    }    };

    const handleDateSave = (date) => {
      setDate(date);
    };
  
    const toggleGender = () => {
      setGender((prevGender) => (prevGender === 'male' ? 'female' : 'male'));
      dispatch(putPetGender(gender));
    };
  
    const getData = (userid)=>{
      axios.post(`http://localhost:8081/getPetProfiledata`, { userId: userid })
  .then((res)=>{
    setPetObject(res.data[0]);
    console.log(res.data[0])
  }).catch((error)=>{
    console.warn(error);
  })
    }
   
    const handleImageChange = (event) => {
      const file = event.target.files[0];
    
      if (file) {
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          // Use reader.result directly without splitting for base64 data
          setSelectedImageToSend(reader.result);
        };
    
        reader.readAsDataURL(file);
        setImage(file);
      }
    };
    
    async function ImageBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      const data = new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
      });
  
      return data;
    }
    const handleUpload = async (e) => {
      const file = e.target.files[0];
    
      if (file) {
        try {
          const data = await ImageBase64(file);
          console.log(data);
          setImage(file);
        } catch (error) {
          console.error(error);
        }
      }
    };
    useEffect(()=>{
      const userid = localStorage.getItem("pet_id")
      if(petObject.dob!== ""){
        setAge(AgeCalculator(petObject.dob))

      }else{
        return;
      }
      getData(userid)
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8081/getPetProfiledata",
            { userId: userid }
          );
    
          if (response.data && response.data.length > 0) {
            setPetObject(response.data[0]);
            setAge(AgeCalculator(response.data[0].dob));
          } else {
            // Set default values if no data is available
            setPetObject(initialPetObject);
            setAge(0); // Set default age
          }
        } catch (error) {
          console.warn(error);
        }
      };
    
      if (userid) {
        fetchData();
      }
    
    }, [userid]);
    
  return (
    <div className="main" style={{ position: "relative", paddingBottom: "50px" }}>
      <div className="pet-img" style={{position:"relative", height:"220px"}} onClick={handleImageClick}>
        <img src={selectedImage} width="100%" height="100%" alt="" style={{objectFit:"contain"}}/>
      <input type='file' style={{display:"", position:"absolute", top:"50%", left:"50%" , transform:"translate(-50%, -50%)", width:"100%", height:"100%"}}
              onChange={handleImageChange}
              ref={fileInputRef}
              onClick={handleUpload}
      
      ></input>
      </div>
      <div style={{ position: "relative", backgroundColor: "" }}>
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
            <h3 style={{ color: "white" }}>{petObject.pet_name || "Add your pet's name"}</h3>
            <p style={{ color: "#22a36b", fontWeight: "bold", fontSize: "1.2rem" }}>
              {petObject.breed}
            </p>
          </div>
          <div className="gender-img" onClick={toggleGender}>
        {genderState.gender === 'M' ? (
          <MaleIcon sx={{ fontSize: "3rem", color: "#2e2e2e" }} />
        ) : (
          <FemaleIcon sx={{ fontSize: "3rem", color: "#e91e63" }} />
        )}
      </div>
        </div>
        <div style={{ position: "relative", top: "3em", padding: "0 10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ display: "flex", justifyItems: "center", gap: "1em" }}>
            <span><PetsIcon style={{ padding: "0" }} /></span>
            <h4 >About {petObject.pet_name || ""}</h4>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "10px", flexWrap: "", marginTop: "", justifyContent: "center" }}>




          <div onClick={()=>handleOpen('breeds')} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Species</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.breed || ""}</span>

          </div>
          <div onClick={openDateCalc} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Age</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{age || "years"}</span>

          </div>
          <div onClick={()=>{openWeightHeight('weight')}} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Weight</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.weight || ""} kg</span>

          </div>
          <div onClick={()=>{openWeightHeight('height')}} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Height</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.height || ""} cm</span>

          </div>
          <div onClick={()=>handleOpen('colors')} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Color</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.color || ""}</span>

          </div>


        </div>
        <PetProfileForm 
          image={image}
          breed={selectedBreed}
          color={selectedColor}
          height={height}
          weight={weight}
          date={date}
          gender={gender === 'male' ? 'M' : 'F'}
          parentName={petObject.parent_name}    
          petName = {petObject.pet_name}
          address = {petObject.address}
          state = {petObject.state}
          city = {petObject.city}
          pincode = {petObject.pincode}
         />
        <DropDown
           open={open}
           onClose={handleClose}
          //  onSelect={handleSelectedOption}
           options={options}
           onSelect={(option) => handleSelectedOption(option, options === breeds ? 'breeds' : 'colors')}
        ></DropDown>
        <WeightHeightCal open={openWeightHeightModal} onClose={handleClose} step={stepType === 'weight' ? 5 : 20} type={stepType === 'weight' ? 'weight' : 'height'} onSave={stepType === 'weight' ? handleWeightSave : handleHeightSave} />
        <DateCalc 
            onSave={handleDateSave}
            open={openDateCalculator}
            onClose={handleClose}></DateCalc>
      </div>
    </div>
  );
};

export default MyPet;
