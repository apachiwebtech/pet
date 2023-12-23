import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import classes from "./BookingAppointment.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "../UI/Card";

const BookingAppointment = () => {
  const newTheme = (theme) =>
  createTheme({
    ...theme,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "3px 2px 10px 5px #888888 !important",
            borderRadius:"10px  !important"
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            display: "none !important",
          },
        },
      },
      MuiPickersToolbar: {
        styleOverrides: {
          root: {
            padding: "0 !important",
          },
          content: {
            display: "none",
            justifyContent: "center !important",
            backgroundColor: "red",
            padding: "1rem",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            display: "none !important",
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.MuiPickersDay-root.Mui-selected": {
              backgroundColor: "green !important",
              color: "white !important",
           
            },
            "&.MuiPickersDay-root:not(.Mui-selected)": {
              borderColor: "transparent !important",
              color: "green",
            },
          },
        },
      },
      
      MuiBadge: {
        styleOverrides: {
          badge: {
            color: "green",
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            backgroundColor: "#f4f4f4",
            marginBottom: "1rem",
          },
        },
      },
    },
    overrides: {
      MuiPickersLayout: {
        contentWrapper: {
          "&.css-16b5y55-MuiPickersLayout-contentWrapper": {
            backgroundColor: "red",
            padding: "0",
          },
          "&.css-1q04gal-MuiDateCalendar-root":{
            padding:"0"
          }
        },
      },
    },
    });
  return (
    <div
      className="container"
      style={{
        backgroundColor: "",
        height: "calc(100vh - 150px)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "",
          display: "grid",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "",
        }}
      >
        <Card style={{ padding: "0", height: "100%" }}>
          <ThemeProvider  theme={newTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker sx={{fontSize : "50px"}} orientation="portrait" />
            </LocalizationProvider>
          </ThemeProvider>
        </Card>
        <div style={{padding:"10px"}}>

        <h3 style={{padding:"0", marginBottom:"20px"}}>Select appointment timing</h3>
        <div className={classes.times}>
          <span>9:00</span>

          <span>10:00</span>

          <span>11:00</span>

          <span>12:00</span>

          <span>2:00</span>

          <span>3:00</span>

          <span>4:00</span>

          <span>5:00</span>

          <span>6:00</span>

          <span>7:00</span>
          <span>8:00</span>
          <span>9:00</span>
        </div>
        </div>
      </div>
      <div style={{width:"100%"}}>
        <PrimaryButton style={{width:"100%"}}>Book Appointment</PrimaryButton>
      </div>
    </div>
  );
};

export default BookingAppointment;
