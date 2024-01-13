import '../App.css';
import Dash from './Pages/Dash';
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Splash from './Pages/Splash';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from './Pages/Register';
import MyPet from './Pages/MyPet';
import BusinessListing from './Pages/BusinessListing';
import Otp from './Pages/Otp';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailPage from './Pages/DetailPage';
import ProductManagingForm from './Forms/ProductManagingForm';
import ServiceProviderForm from './Forms/ServiceProviderForm';
import ManagageServicesForm from './Forms/ManagageServicesForm';
import distance from './Utils/DistaceCalc';
import packageJson from '../../package.json'
import BookingAppointment from './Pages/BookingAppointment';
import Services from './Pages/Services';
import Reviews from './Pages/Reviews';
import { BASE_URL } from './Utils/BaseUrl';
import axios from 'axios';
import AddService from './Forms/AddService';
import ServiceListingPage from './Pages/ServiceListingPage';


const routing = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Dash />,
        path: '/'
      },
      {
        path: '/splash',
        element: <Splash />
      },
      {
        path: '/reg',
        element: <Register />
      },
      {
        path: '/pet/:id',
        element: <MyPet />
      },
      {
        path: '/otp',
        element: <Otp />
      },
      {
        path: '/:link/:id',
        element: <BusinessListing />
      },
      {
        path: '/detailPage/:id',
        element: <DetailPage />
      },
      {
        path: '/productmanaging',
        element: <ProductManagingForm />
      },
      {
        path: '/serviceproform',
        element: <ServiceProviderForm />
      },
      {
        path: '/addservice/:id',
        element: <AddService />
      },
      {
        path: "/manageServices",
        element: <ManagageServicesForm />
      },
      {
        path: "/bookappointment/:id",
        element: <BookingAppointment />
      }, {
        path: "/services",
        element: <Services />
      },
      {
        path: "/reviews/:id",
        element: <Reviews />
      },
      {
        path: "/servicelistingpage",
        element: <ServiceListingPage />
      }

    ]

  }
])

function checkLocalStorageAndRedirect(navigate) {
  const pet_email = localStorage.getItem('pet_email');
  if (pet_email == null) {
    navigate('/reg'); // Redirect to dashboard if id exists in localStorage
  }
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation not supported");
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  localStorage.setItem('latitutde', latitude);
  localStorage.setItem('longitude', longitude);
}

function error() {
  console.log("Unable to retrieve your location");
}
// console.log(distance(localStorage.getItem('latitutde'), 19.200306300000012, localStorage.getItem('longitude'), 73.1647712).toFixed(2))

const getUserName = (userId) => {
  const user_id = localStorage.getItem('pet_id');

  axios.post(`${BASE_URL}/getUserName`, { user_id })
    .then((res) => {
      localStorage.setItem('awt_parent_name', res.data[0].parent_name);
      console.log(res.data[0])
    })
    .catch((err) => {
      console.log(err);
    })
}
function App() {


  const navigate = useNavigate();

  useEffect(() => {
    checkLocalStorageAndRedirect(navigate);
    getUserName();
  }, [navigate]);

  // console.log(packageJson.version, "this is the app version");
  return (
    <>
      <Header />
      <Outlet />
      {window.location.pathname !== '/splash' && window.location.pathname !== '/reg' && window.location.pathname !== '/pet' && window.location.pathname !== '/services' && window.location.pathname !== '/bookappointment' && <Footer />}
    </>

  );
}

export default routing;
