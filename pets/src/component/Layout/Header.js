import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case '/reg':
        return 'Register';
      case '/splash':
        return 'Welcome';
      case '/':
        return 'Dashboard';
      case location.pathname.match(/^\/vet\/\d+$/) ? location.pathname : '':
        return 'Vets'
      case location.pathname.match(/^\/pet\/\d+$/) ? location.pathname : '':
        return 'Pet profile'
      case '/pet/:id':
          return 'Pet profile'
      case '/serviceproform':
        return 'Provider Details'
      case '/listing/services':
        return 'Services'
      case '/productmanaging':
        return 'Manage Product'
      case location.pathname.match(/^\/addservice\/\d+$/) ? location.pathname : '':
        return 'Add Service'
      case location.pathname.match(/^\/addproduct\/\d+$/) ? location.pathname : '':
        return 'Add Product'
      case location.pathname.match(/^\/groomers\/\d+$/) ? location.pathname : '':
        return 'Groomers'
      case location.pathname.match(/^\/walkers\/\d+$/) ? location.pathname : '':
        return 'Walkers'
      case location.pathname.match(/^\/boarders\/\d+$/) ? location.pathname : '':
        return 'Boarders'
      case location.pathname.match(/^\/trainers\/\d+$/) ? location.pathname : '':
        return 'Trainers'
      case location.pathname.match(/^\/petstores\/\d+$/) ? location.pathname : '':
        return 'Pet Store'
      case location.pathname.match(/^\/product\/\d+$/) ? location.pathname : '':
        return 'Product'
      case location.pathname.match(/^\/playareas\/\d+$/) ? location.pathname : '':
        return 'Play Areas'
      case location.pathname.match(/^\/lost\/\d+$/) ? location.pathname : '':
        return 'Lost & Found'
      case location.pathname.match(/^\/community\/\d+$/) ? location.pathname : '':
        return 'Community'
      case '/community/:id':
        return 'Community'
      case '/servicerequest':
        return 'Service Request'
      case '/productrequest':
        return 'Product Request'
      case '/productlistingpage':
        return 'Product Listing'
      case '/myappointment':
        return 'My Appointment'
      case '/setting':
        return 'Setting'
      default:
        return 'Pet App';
    }
  };

  return (
    <div className='head text-center position-relative'>
      <p style={{ color: "white" }}>{getPageName()}</p>
      {window.location.pathname !== '/' && window.location.pathname !== '/log' && <ArrowBackIosIcon className='head-arrow' onClick={() => navigate(-1)} />}

    </div>
  )
}

export default Header