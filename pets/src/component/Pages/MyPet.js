import React, { useState, useRef, useEffect, useId } from "react";
import petimg from "../../image/add_a_photo_rounded.svg";
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
import { BASE_URL } from "../Utils/BaseUrl";
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

  const handleSelectedOption = (option, type) => {
    if (type === 'breeds') {
      setSelectedBreed(option); 
    } else if (type === 'colors') {
      setSelectedColor(option);
    }    };

    const handleDateSave = (date) => {
      setDate(date);

      const dateObject = new Date(Date.parse(date));

      console.log(dateObject)
       const year = dateObject.getFullYear();
       console.log(year)
       const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
       console.log(month);
       const day = date.getDate().toString().padStart(2, '0');
       console.log(day);
       // console.log("inside else ")
       const formattedDate = `${year}-${month}-${day}`;
       setDate(formattedDate);
       setPetObject((prevObject) => ({ ...prevObject, dob: formattedDate }));

       console.log("Formatted date:", formattedDate);
   
       setAge(AgeCalculator(formattedDate));
    };
  
    const toggleGender = () => {
      setGender((prevGender) => (prevGender === 'male' ? 'female' : 'male'));
      dispatch(putPetGender(gender));
    };
  

    const handleImageChange = async (event) => {
      const file = event.target.files[0];
        const reader = new FileReader();

      if (file) {
        try {
          const data = await ImageBase64(file);
          setImage(file);
          console.log(file, "imageee"); // Use 'file' instead of 'image' for immediate access to the selected file
          console.log(data);
          reader.onloadend = () => {
                  setSelectedImage(reader.result);
                  // Use reader.result directly without splitting for base64 data
                  setSelectedImageToSend(reader.result);
                }; 

                reader.readAsDataURL(file);
        } catch (error) {
          console.error(error);
        }
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
    useEffect(() => {
      console.log("petObject.dob:", petObject.dob);
    
      if (petObject.dob !== undefined && petObject.dob !== "") {
        console.log("Inside if");
        setAge(AgeCalculator(petObject.dob));
      } else if(date !== ''){
        console.log(date)
        const dateObject = new Date(Date.parse(date));

       console.log(dateObject)
        const year = dateObject.getFullYear();
        console.log(year)
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        console.log(month);
        const day = date.getDate().toString().padStart(2, '0');
        console.log(day);
        // console.log("inside else ")
        const formattedDate = `${year}-${month}-${day}`;
        setDate(formattedDate);
        setPetObject((prevObject) => ({ ...prevObject, dob: formattedDate }));

        console.log("Formatted date:", formattedDate);
    
        setAge(AgeCalculator(formattedDate));
      }
    }, [date, petObject.dob]);
    
    console.log(date);
    const dateObject = new Date(date);



    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/getPetProfiledata`,
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
    
    }, []);

      const putImage=(image)=>{
        const formData = new FormData();

        formData.append('image', image);
        console.log(
          "put image called"
        )
      }

    const containerHeight = 220; // Set your container height here
    const imageHeight = selectedImage ? containerHeight : 0; // Use 0 if no image is selected
    const topPosition = (containerHeight - imageHeight) / 2;
  
  return (
    <div className="main" style={{ position: "relative", paddingBottom: "50px" }}>
      <div className="pet-img" style={{position:"relative",  height: `${containerHeight}px` }}>
        <img src={selectedImage} width="100%" height="100%" alt="" accept='image/*' style={{objectFit:"contain", position:"absolute",  top: `${topPosition}px` }}/>
      <input type='file' style={{display:"", position:"absolute", top:"50%", left:"50%" , transform:"translate(-50%, -50%)", width:"100%", height:"100%", border:"none", boxShadow:"none"}}
              onChange={handleImageChange}
              ref={fileInputRef}
              // onClick={handleUpload}
      
      ></input>
      </div>
      <div style={{ position: "relative", backgroundColor: "" }}>
        {petObject.pet_name && <div
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
        </div>}
        <div style={{ position: "relative", top: "3em", padding: "0 10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ display: "flex", justifyItems: "center", gap: "1em" }}>
            <span><PetsIcon style={{ padding: "0" }} /></span>
            <h4 >About {petObject.pet_name || "Your furry friend"}</h4>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "10px", flexWrap: "", marginTop: "", justifyContent: "center" }}>




          <div onClick={()=>handleOpen('breeds')} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Species</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}>{petObject.breed || selectedBreed || ""}</span>

          </div>
          <div onClick={openDateCalc} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Age</p>
            {/* <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{`${age} years` || "select date"}</span> */}
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>  {age < 0 ? `${age * 10} months` : `${age} years` || "select date"}</span>

          </div>
          <div onClick={()=>{openWeightHeight('weight')}} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Weight</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.weight || "" || weight} kg</span>

          </div>
          <div onClick={()=>{openWeightHeight('height')}} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Height</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.height || "" || height} cm</span>

          </div>
          <div onClick={()=>handleOpen('colors')} onClose={handleClose} style={{ position: "relative", top: "3em", padding: "", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#d9ffe3", height: "4rem", width: "4.3rem", borderRadius: "10px", borderBottom: "3px solid #22a36b", fontSize: "0.8rem" }}>

            <p style={{ margin: "0" }}>Color</p>
            <span style={{ margin: "0", fontWeight: "bold", color: "#22a36b" }}>{petObject.color || "" || selectedColor}</span>

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
        <WeightHeightCal open={openWeightHeightModal} onClose={handleClose} step={stepType === 'weight' ? 5 : 10} type={stepType === 'weight' ? 'weight' : 'height'} onSave={stepType === 'weight' ? handleWeightSave : handleHeightSave} />
        <DateCalc 
            onSave={handleDateSave}
            open={openDateCalculator}
            onClose={handleClose}></DateCalc>
      </div>
    </div>
  );
};

export default MyPet;
