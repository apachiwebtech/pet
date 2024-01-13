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
      case '/listing/vet':
        return 'Vets'
      case '/pet' : 
      return 'Pet profile'  
      case '/serviceproform' : 
      return 'Provider Details' 
      case '/listing/services' : 
      return 'Services'  
      case '/productmanaging' : 
      return 'Manage Product'  
      case `/addservice/id` : 
      return 'Add Service'
      case '/servicelistingpage' : 
      return 'Service Listing'  
      case '/servicerequest' : 
      return 'Service Request' 
      case '/productrequest' : 
      return 'Product Request'     
      default:
        return '';
    }
  };
  return (
    <div className='head text-center position-relative'>
        <p style={{color :"white"}}>{getPageName()}</p>
        {window.location.pathname !== '/' && <ArrowBackIosIcon className='head-arrow' onClick={() => navigate(-1)}/>} 

    </div>
  )
}

export default Header