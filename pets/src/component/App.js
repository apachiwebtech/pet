
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
import ServiceProviderForm from './Forms/ServiceProviderForm';
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
        path:'/splash',
        element:<Splash/>
      },
      {
        path:'/reg',
        element:<Register/>
      },
      {
        path:'listing/pet',
        element:<MyPet/>
      },
      {
        path:'/otp',
        element:<Otp/>
      },
      {
        path:'/listing/:category',
        element:<BusinessListing/>
      },
      {
        path:'/listing/:category/:id',
        element:<DetailPage/>
      },
      {
        path:'/serviceproform',
        element:<ServiceProviderForm/>
      },
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
  const [flag, setFlag]  = useState(false);
  useEffect(()=>{

  if(window.location.pathname !== '/splash' && window.location.pathname !== '/reg' && window.location.pathname !== '/listing/pet'){
    setFlag(true);
  }
},[flag])

const navigate = useNavigate();

  useEffect(() => {
    checkLocalStorageAndRedirect(navigate);
  }, [navigate]);
  return (
    <>
      <Header />
      <Outlet />
      {window.location.pathname !== '/splash' && window.location.pathname !== '/reg' && <Footer />}
    </>

  );
}

export default routing;
