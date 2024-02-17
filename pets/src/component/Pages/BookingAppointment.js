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
import { TextField } from "@mui/material";



const BookingAppointment = () => {
  const date = new Date()
  const { id } = useParams()
  const [msg, setMsg] = useState("")
  const [hide, setHide] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs(date));
  const [progress, setProgress] = useState(false)
  const [comment, setComment] = useState("")

  const handleDateChange = (newDate) => {

    setSelectedDate(newDate.format());
    // You can do something with the selected date value here, like sending it to a server or updating state.
    console.log('Selected Date:', newDate); // Example: Log the selected date to the console
  };



  console.log(comment)

  const newTheme = (theme) =>
    createTheme({
      ...theme,
      components: {
        MuiPickersToolbar: {
          styleOverrides: {
            root: {
              color: "#5DB15B",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#5DB15B",
              border: "1px solid",
              backgroundColor: "#5DB15B",
            },
          },
        },
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              color: '#bbdefb',
              borderRadius: 1,
              borderWidth: 12,
              borderColor: '#2196f3',
              border: '0px solid',
              backgroundColor: '#fff',
            }
          }
        }
      },
    });

  // const navigate = useNavigate();
  const handleSubmit = () => {
    setProgress(true)
    const appointmentData = {
      date: selectedDate,
      user_id: localStorage.getItem('pet_id'),
      service_id: id,
      comment :comment
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
      })

    // navigate("/");
  };
  return (

    <div className="p-3">
      <div>
        <Card >
          <ThemeProvider theme={newTheme}>
            <DemoItem label="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>

                <StaticDateTimePicker defaultValue={dayjs(date)}
                  onChange={handleDateChange} disablePast={true}
                  sx={{ height: "520px" }}
                />
              </LocalizationProvider>
            </DemoItem>
          </ThemeProvider>
        </Card>

        <TextField onChange={(e) =>setComment(e.target.value)} className="my-3" style={{ width: "100%" }} id="outlined-basic" label="Add comment" variant="outlined" />

      </div>



      <div style={{ width: "100%" }}>
        {
          hide ? <Alert style={{ height: "50px" }} variant="filled" severity="success">
            <div className="d-flex justify-content-between" style={{ fontSize: "12px" }}>
              {msg}
              <p className="px-5 text-light" style={{ textDecoration: "underline" }}> <Link to="/myappointment" style={{ color: "#fff" }}>Details <i class="bi bi-arrow-right"></i></Link></p>
            </div>
          </Alert> : null
        }
        {hide ? null :
          <PrimaryButton style={{ width: "100%" }} onClick={handleSubmit}>
            Book Appointment
          </PrimaryButton>
        }

        {progress ? <LinearProgress /> : null}
      </div>

    </div>
  );
};

export default BookingAppointment;
