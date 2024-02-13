import React, { useEffect } from "react";
import Card from "../UI/Card";
import { Radio, RadioGroup } from "@mui/material";
import classes from './Settings.module.css';
import { useState } from "react";
import axios from 'axios'
import { BASE_URL } from '../Utils/BaseUrl'
const Settings = () => {

  // const [privateid, setPrivate] = useState([])
  const storedValue = localStorage.getItem('selectedRadioValue');
  const [selectedValue, setSelectedValue] = useState(storedValue == 1 ? "1" : "0" );
  // const [sentVal , setNew] = useState('')



  const handlesubmit = (sentVal) => {
    const data = {
      user_id: localStorage.getItem("pet_id"),
      private: sentVal
    }
    axios.post(`${BASE_URL}/private`, data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // async function getprivate() {
  //   const data = {
  //     user_id: localStorage.getItem("pet_id"),

  //   }
  //   axios.post(`${BASE_URL}/getPrivate`, data)
  //     .then((res) => {
  //       setPrivate(res.data[0].private)
  //       // if(res.data){
  //       //   localStorage.setItem('selectedRadioValue', res.data[0].private);
  //       // }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   getprivate()
  // }, [])

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  
    handlesubmit(newValue)
  
    localStorage.setItem('selectedRadioValue', newValue);

    // Your API call can be placed here if needed
  };


  // console.log(selectedValue)


  return (


    <div
      className="container"
      style={{ backgroundColor: "", height: "calc(90vh)", padding: "20px 10px" }}
    >
      {
        localStorage.getItem("pet_role") == 1 ?
          <form onClick={handlesubmit}>
            <div className={classes.Container}>
              <h1>Personalisations</h1>
              <Card
                className={classes.CardClass}
              >
                <p>Profile Options</p>
                <div className={classes.RadioGroup}>
                  <RadioGroup
                    defaultValue={selectedValue}
                    name="radio-buttons-group"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: "1.4rem",
                    }}
                    value={selectedValue}
                    onChange={handleRadioChange}
                  >
                    <Radio value="0" label="Outlined" variant="outlined" color="success" />
                    <span>Public</span>
                    <Radio value="1" label="Soft" variant="soft" color="success" />
                    <span>Private</span>
                  </RadioGroup>
                </div>
              </Card>
            </div>
            <div className={classes.Container}>
              <h1>Access</h1>
              <Card
                className={classes.CardClass}
              >

                <p>Photo access</p>
                <div className={classes.RadioGroup}>

                  <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{ display: "flex", flexDirection: "row", alignItems: "center", fontSize: "1.4rem" }}>
                    <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
                    <span> Allow</span>
                    <Radio value="soft" label="Soft" variant="soft" color="success" />
                    <span>Deny</span>
                  </RadioGroup>
                </div>
              </Card>
              <Card
                className={classes.CardClass}
              >
                <p>Location access</p>
                <div className={classes.RadioGroup}>
                  <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{ display: "flex", flexDirection: "row", alignItems: "center", fontSize: "1.4rem" }}>
                    <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
                    <span> Allow</span>
                    <Radio value="soft" label="Soft" variant="soft" color="success" />
                    <span>Deny</span>
                  </RadioGroup>

                </div>
              </Card>
            </div>
            <div className={classes.Container}>
              <h1>Notifications</h1>
              <Card
                className={classes.CardClass}
              >
                <p>App Notifications</p>
                <div className={classes.RadioGroup}>

                  <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{ display: "flex", flexDirection: "row", alignItems: "center", fontSize: "1.4rem" }}>
                    <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
                    <span> Allow</span>
                    <Radio value="soft" label="Soft" variant="soft" color="success" />
                    <span>Deny</span>
                  </RadioGroup>
                </div>
              </Card>
              <Card
                className={classes.CardClass}
              >
                <p>Email Notifications</p>
                <div className={classes.RadioGroup}>
                  <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{ display: "flex", flexDirection: "row", alignItems: "center", fontSize: "1.4rem" }}>
                    <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
                    <span> Allow</span>
                    <Radio value="soft" label="Soft" variant="soft" color="success" />
                    <span>Deny</span>
                  </RadioGroup>

                </div>
              </Card>
            </div>

          </form> : <></>}
    </div>
  );
};

export default Settings;
