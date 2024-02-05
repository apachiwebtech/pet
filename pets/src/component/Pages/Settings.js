import React from "react";
import Card from "../UI/Card";
import { Radio, RadioGroup } from "@mui/material";
import classes from './Settings.module.css';
const Settings = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "", height: "calc(90vh)", padding:"20px 10px" }}
    >
      <div>
      <div className={classes.Container}>
          <h1>Personalisations</h1>
          <Card
          className={classes.CardClass}
          >
            <p>Profile Options</p>
            <div className={classes.RadioGroup}>

            <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{display:"flex", flexDirection:"row", alignItems: "center",fontSize:"1.4rem" }}>
              <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
            <span>Public</span>
              <Radio value="soft" label="Soft" variant="soft" color="success" />
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

            <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{display:"flex", flexDirection:"row", alignItems: "center",fontSize:"1.4rem" }}>
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
            <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{display:"flex", flexDirection:"row", alignItems: "center",fontSize:"1.4rem" }}>
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

            <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{display:"flex", flexDirection:"row", alignItems: "center",fontSize:"1.4rem" }}>
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
            <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{display:"flex", flexDirection:"row", alignItems: "center",fontSize:"1.4rem" }}>
              <Radio value="outlined" label="Outlined" variant="outlined" color="success" />
            <span> Allow</span>
              <Radio value="soft" label="Soft" variant="soft" color="success" />
              <span>Deny</span>
            </RadioGroup>

            </div>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default Settings;
