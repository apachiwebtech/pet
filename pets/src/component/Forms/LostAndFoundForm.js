import React, { useState } from "react";
import CustomInput from "../UI/CustomInput";
import "./Forms.css";
import CustomTextarea from "../UI/CustomTexarea";
import PrimaryButton from "../UI/PrimaryButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const breeds = [
  "Affenpinscher",
  "Afghan Hound",
  "Akita Inu",
  "Alaskan Malamute",
  "American Staffordshire Terrier",
  "Basset Hound",
  "Beagle",
  "Bernese Mountain Dog",
  "Bichon Frise",
  "Bloodhound",
  "Boerboel",
  "Bolognese Dog",
  "Boo",
  "Border Collie",
  "Boston Terrier",
  "Boxer",
  "Bullmastiff",
  "Bully Kutta",
  "Cane Corso",
  "Caravan Hound",
  "Caucasian Mountain Shepherd Dog",
  "Cavalier King Charles Spaniel",
  "Chihuahua",
  "Chow Chow",
  "Dachshund",
  "Dalmation",
  "Doberman",
  "English Bulldog",
  "English Cocker Spaniel",
  "English Mastiff",
  "French Bulldog",
  "German Shepherd",
  "German Shorthaired Pointer",
  "Golden Retriever",
  "Great Dane",
  "Greyhound",
  "Havanese Dog",
  "Indian Spitz",
  "Labrador Retriever",
  "Lhasa Apso",
  "Maltese Dog",
  "Newfoundland Dog",
  "Papillon",
  "Pomeranian",
  "Poodle",
  "Pug",
  "Red Nose Pitbull Terrier",
  "Rottweiler",
  "Saint Bernard",
  "Samoyed",
  "Shiba Inu",
  "Shih Tzu",
  "Siberian Husky",
  "Tibetan Mastiff",
  "Wire Haired Dachshund",
  "Yorkshire Terrier",
];

const LostAndFoundForm = () => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState({
    breed: "",
    color: "",
    mobile: "",
    message: "",
    image: "",
    petName: "",
    location : ""
  });
  async function ImageBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

    return data;
  }

  const handleLabelClick = () => {
    // Trigger the file input when the label is clicked
    document.getElementById("fileInput").click();
  };

  const handleUpload = async (e) => {
    document.getElementById("uptext1").style.display = "none";
    const data = await ImageBase64(e.target.files[0]);
    const file = e.target.files[0];
    setImage(file);
    setValue((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };
  const onHandleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form submitted!"); // Add this line for debugging
    const userid = localStorage.getItem('pet_id');
    const formData = new FormData();
    formData.append('image', image)
    formData.append('userid', userid);
    formData.append('breed', value.breed);
    formData.append('color', value.color);
    formData.append('mobile', value.mobile);
    formData.append('message', value.message);
    formData.append('petName', value.petName);
    formData.append('last_location', value.location);
    console.log(formData);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
const url = 'https://petjs.thetalentclub.co.in'
    axios.post(`${url}/addLostFound`, formData,{
      headers : {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div
      className="formContainer"
      style={{
        position: "relative",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "",
          padding: "0 10px",
          width: "100%",
          height:"100px"
        }}
      >
        <h1>Add pet details </h1>
        <div
          className="upload-box col-4"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={handleLabelClick}
        >
          <label
            htmlFor="fileInput"
            style={{
              display: "block",
              textAlign: "center",
            }}
          >
            upload
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleUpload}
            name="image"
          />

          <p id="uptext1" style={{ zIndex: "-10", textAlign: "center" }}>
          </p>
          <img
            src={value.image}
            className="service-img"
            alt=""
            width="200px"
            accept="image/*"
            id="output"
          />
        </div>
      </div>
      <form
      onSubmit={handleSubmit}
        id="lostAndFound"
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          
          <span style={{ fontSize: "1rem" }}>Breed</span>
          <FormControl
            sx={{
              width: "70%",
              borderRadius: "10px",
              boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{ background: "white" }}
            >
              select breed
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              name="breed" 
              value={value.breed}
              onChange={onHandleChange} 
            >
              {breeds.map((breed) => {
                return (
                  <MenuItem key={breed} value={breed}>
                    {breed}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "1rem" }}>Pet Name</span>
          <CustomInput 
          type={"text"}
          style={{ width: "70%", border: "" }}
          value={value.petName}
          onChange={onHandleChange} 
          name="petName"
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "1rem" }}>Color</span>
          <CustomInput 
          type={"text"}
          style={{ width: "70%", border: "" }}
          value={value.color}
          onChange={onHandleChange} 
          name="color"
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "1rem" }}>Last Seen</span>
          <CustomInput
           type={"text"}
           name='location'
           onChange={onHandleChange}
           value={value.location}
           style={{ width: "70%", border: "" }} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "1rem" }}>Contact Details</span>
          <CustomInput
           type={"text"}
           name='mobile'
           onChange={onHandleChange}
           value={value.mobile}
           maxLength='10'
           style={{ width: "70%", border: "" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ fontSize: "1.5rem" }}>Message</span>
          <CustomTextarea name='message' style={{height:"100px"}} onChange={onHandleChange} value={value.message}></CustomTextarea>
        </div>


        <PrimaryButton style={{ marginTop: "", }} type="submit" form="lostAndFound">
          Submit
        </PrimaryButton>
      </form>
    </div>
  );
};

export default LostAndFoundForm;
