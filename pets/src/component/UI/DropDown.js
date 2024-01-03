import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchField from "./SearchField";
import classes from './DropDown.module.css'
const data = [
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
];

const DropDown = (props) => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // New state to hold selected option

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap:'10px'
  };

  const handleItemClick = (item) => {
    setSelectedOption(item); // Update selected option when an item is clicked
    console.log(item);
  };

  const handleSaveClick=()=>{
    console.log('Save button clicked');

    props.onSelect(selectedOption)
    console.log(selectedOption, "selected save function")
    props.onClose(); // Close the modal after saving

  }
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <SearchField setSearch={setSearch} />
        <div
        className={classes.Container}
          style={{
            boxSizing: "border-box",
            height: "400px",
            backgroundColor: "",
            overflowY: "scroll",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px 0",
          }}
        >
          {data.filter((item) => (item.toLowerCase()).includes(search.toLowerCase())).map((item) => {
            return (
              <li
              key={item}
              className={classes.listStyle}
               onClick={() => handleItemClick(item)}           >
                {item}
              </li>
            );
          })}
        </div>
        <PrimaryButton style={{ marginTop: "auto" }} onClick={handleSaveClick} >Save</PrimaryButton>
      </Box>
    </Modal>
  );
};

export default DropDown;
