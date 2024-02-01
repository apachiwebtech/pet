import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import classes from "./BookingAppointment.module.css";
import dayjs from "dayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

import LinearProgress from '@mui/material/LinearProgress';

import Card from "../UI/Card";
import axios from "axios";
import { BASE_URL } from "../Utils/BaseUrl";



const BookingAppointment = () => {
  const date = new Date()
  const { id } = useParams()
  const [msg, setMsg] = useState("")
  const [hide, setHide] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs(date));
  const [progress , setProgress] = useState(false)

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate.format());
    // You can do something with the selected date value here, like sending it to a server or updating state.
    console.log('Selected Date:', newDate); // Example: Log the selected date to the console
  };

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

  // const navigate = useNavigate();
  const handleSubmit = () => {
    setProgress(true)
    const appointmentData = {
      date: selectedDate,
      user_id: localStorage.getItem('pet_id'),
      service_id: id
    };
    axios.post(`${BASE_URL}/book_appoint`, appointmentData)
      .then((res) => {
        setMsg(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setHide(true)
        setProgress(false)
        
        setTimeout(() => {
          setHide(false)
        }, 5000);
      })

    // navigate("/");
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
        <Card style={{ padding: "0", height: "100%" }}>
          <ThemeProvider theme={newTheme}>
            <DemoItem label="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker defaultValue={dayjs(date)} value={selectedDate}
                  onChange={handleDateChange} />
              </LocalizationProvider>
            </DemoItem>
          </ThemeProvider>
        </Card>
        {
          hide ? <Alert style={{ height: "50px" }} variant="filled" severity="success">
            <div className="d-flex justify-content-between">
              {msg}
              <p className="px-5 text-light" style={{ textDecoration: "underline" }}> <Link to="/myappointment">Details <i class="bi bi-arrow-right"></i></Link></p>
            </div>
          </Alert> : null
        }


      </div>


      <div style={{ width: "100%" }}>
        <PrimaryButton style={{ width: "100%" }} onClick={handleSubmit}>
          Book Appointment
        </PrimaryButton>
        {progress?<LinearProgress /> : null}
      </div>

    </div>
  );
};

export default BookingAppointment;
