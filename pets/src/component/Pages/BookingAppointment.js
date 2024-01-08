import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import classes from "./BookingAppointment.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";

const timing = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
];

const BookingAppointment = () => {
  const newTheme = (theme) =>
    createTheme({
      ...theme,
      components: {
        MuiPickersToolbar: {
          styleOverrides: {
            root: {
              color: "#bbdefb",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#2196f3",
              border: "1px solid",
              backgroundColor: "#0d47a1",
            },
          },
        },
      },
    });
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(value.$d);
    const appointmentData = {
      day: value.$d,
      timing: time,
    };

    console.log(appointmentData);
    navigate("/");
  };
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
          gap: "10px",
        }}
      >
        <Card
          style={{
            padding: "0",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <ThemeProvider  theme={newTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker sx={{fontSize : "50px"}} orientation="portrait" />
            </LocalizationProvider>
          </ThemeProvider> */}

          <ThemeProvider theme={newTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem>
                  <DateCalendar
                    showDaysOutsideCurrentMonth
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </ThemeProvider>
        </Card>
        <div style={{ padding: "10px" }}>
          <h3 style={{ padding: "0", marginBottom: "20px" }}>
            Select appointment timing
          </h3>
          <div className={classes.times}>
            {timing.map((item) => {
              return (
                <span key={item} onClick={() => setTime(item)}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <PrimaryButton style={{ width: "100%" }} onClick={handleSubmit}>
          Book Appointment
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BookingAppointment;
