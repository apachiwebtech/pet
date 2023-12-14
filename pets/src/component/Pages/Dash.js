import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HouseIcon from "@mui/icons-material/House";
import StoreIcon from "@mui/icons-material/Store";
import SearchField from "../UI/SearchField";
import { Link } from "react-router-dom";
const Dash = () => {
  return (
    <div className="mx-3">
      <div className="text-center ">
        <p className="hello-text">Hello, how can we help you?</p>
        {/* <div className='position-relative'>
          <TextField style={{ width: "100%" }} id="outlined-basic" label="Search Keyword" variant="outlined" />
          <SearchIcon className='search-icon' />
        </div> */}
        <SearchField />
      </div>
      <div className="row text-center pt-3 icon-area">
        <div className="col-4">
          <Link to="/mypet" style={{ textDecoration: "none", color: "black" }}>
            <LocalHospitalIcon className="dash-icon" />
            <p>My Pet</p>
          </Link>
        </div>
        <div className="col-4">
          <HouseIcon className="dash-icon" />
          <p>Community</p>
        </div>
        <div className="col-4 ">
          <StoreIcon className="dash-icon" />
          <p>Vet</p>
        </div>
        <div className="col-4">
          <LocalHospitalIcon className="dash-icon" />
          <p>Grommers</p>
        </div>
        <div className="col-4">
          <StoreIcon className="dash-icon" />
          <p>Walkers</p>
        </div>
        <div className="col-4 ">
          <LocalHospitalIcon className="dash-icon" />
          <p>Boarders</p>
        </div>
        <div className="col-4">
          <LocalHospitalIcon className="dash-icon" />
          <p>Trainers</p>
        </div>
        <div className="col-4">
          <LocalHospitalIcon className="dash-icon" />
          <p>Pet Stores</p>
        </div>
        <div className="col-4 ">
          <StoreIcon className="dash-icon" />
          <p>Fresh Meat</p>
        </div>
        <div className="col-4">
          <HouseIcon className="dash-icon" />
          <p>Play Areas</p>
        </div>
        <div className="col-4">
          <LocalHospitalIcon className="dash-icon" />
          <p>Adoption</p>
        </div>
        <div className="col-4 ">
          <StoreIcon className="dash-icon" />
          <p>Lost & Found</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between text-center icon-area">
        <div className="">
          <StoreIcon className="dash-icon" />
          <p>
            My <br />
            Appointment
          </p>
        </div>
        <div className=" ">
          <StoreIcon className="dash-icon" />
          <p>
            My Order <br /> Booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dash;
