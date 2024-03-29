import '../App.css';
// import Dash from './Pages/Dash';
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
import { lazy, Suspense, useEffect, useState } from 'react';
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
import AddProduct from './Forms/AddProduct';
import ProductListingPage from './Pages/PorductListingPage';
import ServiceRequest from './Pages/ServiceRequest';
import ProductRequest from './Pages/ProductRequest';
import Community from './Pages/Community'
import MyApointment from './Pages/MyApointMent';
import Settings from './Pages/Settings';
import LostAndFound from './Pages/LostAndFound'
import LostAndFoundForm from './Forms/LostAndFoundForm'
import Loader from './UI/Loader';
import Product from './Pages/Product';
import Login from './Pages/Login';
import 'animate.css';

const Dash = lazy(() => import('./Pages/Dash'));

const routing = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:(
          <Suspense fallback={<Loader />}>
              <Dash />
          </Suspense>
        ),
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
        path: '/log',
        element: <Login />
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
        path: '/detailPage/:id/:ratings',
        element: <DetailPage />
      },
      {
        path: '/productmanaging',
        element: <ProductManagingForm />
      },
      {
        path: '/product/:id',
        element: <Product />
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
        path: "/loader",
        element: <Loader />
      },
      {
        path: "/servicelistingpage",
        element: <ServiceListingPage />
      },
      {
        path: "/addproduct/:id",
        element: <AddProduct/>
      },
      {
        path: "/productlistingpage",
        element: <ProductListingPage />
      },
      {
        path : "/servicerequest",
        element: <ServiceRequest />
      },
      {
        path : "/productrequest",
        element: <ProductRequest />
      },
      {
        path : "/community/:id",
        element: <Community />
      },
      {
        path: "/bookappointment/:id",
        element: <BookingAppointment />
      },
      {
        path: "/myappointment",
        element: <MyApointment/>
      },
      {
        path: "/setting",
        element: <Settings/>
      },
      {
        path : '/lost/:id',
        element:<LostAndFound/>
      },
      {
        path : '/lostfoundform',
        element : <LostAndFoundForm/>
      },

    ]

  }
])

function checkLocalStorageAndRedirect(navigate) {
  const pet_email = localStorage.getItem('pet_email');
  if (pet_email == null) {
    navigate('/log'); // Redirect to dashboard if id exists in localStorage
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
      {window.location.pathname !== '/splash'&& window.location.pathname !== '/log'&& window.location.pathname !== '/otp' && window.location.pathname !== '/serviceproform' && window.location.pathname !== '/serviceproform' && window.location.pathname !== '/reg' &&   !/^\/detailPage\/\d+$/.test(window.location.pathname)  &&   !/^\/community\/\d+$/.test(window.location.pathname) &&    !/^\/pet\/\d+$/.test(window.location.pathname)  &&   !/^\/vet\/\d+$/.test(window.location.pathname)  &&   !/^\/groomers\/\d+$/.test(window.location.pathname)  &&   !/^\/walkers\/\d+$/.test(window.location.pathname)  &&   !/^\/boarders\/\d+$/.test(window.location.pathname)&& window.location.pathname !== '/pet'  &&   !/^\/trainers\/\d+$/.test(window.location.pathname)  &&   !/^\/product\/\d+$/.test(window.location.pathname)  &&   !/^\/playareas\/\d+$/.test(window.location.pathname)  &&   !/^\/lost\/\d+$/.test(window.location.pathname)&& window.location.pathname !== '/services' && window.location.pathname !== '/bookappointment' &&  !/^\/addservice\/\d+$/.test(window.location.pathname) &&  !/^\/addproduct\/\d+$/.test(window.location.pathname) && !/^\/bookappointment\/\d+$/.test(window.location.pathname) && <Footer />}
    </>

  );
}

export default routing;
