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
import packageJson from '../../package.json'
import BookingAppointment from './Pages/BookingAppointment';
import Services from './Pages/Services';
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
        path: '/pet',
        element: <MyPet />
      },
      {
        path: '/otp',
        element: <Otp />
      },
      {
        path: '/:link',
        element: <BusinessListing />
      },
      {
        path: '/detail/:id',
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
        path: "/manageServices",
        element: <ManagageServicesForm />
      },
      {
        path: "/bookappointment",
        element: <BookingAppointment />
      }, {
        path: "/services",
        element: <Services />
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


function App() {


  const navigate = useNavigate();

  useEffect(() => {
    checkLocalStorageAndRedirect(navigate);
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
