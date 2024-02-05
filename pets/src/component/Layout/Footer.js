import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Link } from 'react-router-dom';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
const Footer = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <div className='d-flex justify-content-around footer py-1'>
    //   <div className='text-center'>
    //     <HomeOutlinedIcon />
    //     <p>Home</p>
    //   </div>
    //   <div className='text-center'>
    //     <PetsOutlinedIcon />
    //     <p>profile</p>
    //   </div>
    //   <div className='text-center'>
    //     <LocationOnOutlinedIcon />
    //     <p>Location</p>
    //   </div>
    //   <div className='text-center'>
    //     <SettingsOutlinedIcon />
    //     <p>Setting</p>
    //   </div>
    //   <div className='text-center'>
    //     <LogoutOutlinedIcon />
    //     <p>Logout</p>
    //   </div>
    // </div>
    <div className='footer py-1'>
      <BottomNavigation sx={{ width: "100%", background: "#5DB15B" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          to='/'
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
          selected
        />
        {localStorage.getItem("pet_role") == 1 ? <BottomNavigationAction
          component={Link}
          to='/pet/:id'
          label="Profile"
          value="profile"
          icon={<PetsOutlinedIcon />}
        /> : null}
        {localStorage.getItem("pet_role") == 2 ? <BottomNavigationAction
          component={Link}
          to='/servicerequest'
          label="Service"
          value="Service Request"
          icon={<MoveToInboxIcon />}
        /> : null}
        {localStorage.getItem("pet_role") == 1 ? 
          <BottomNavigationAction
            component={Link}
            to='/community/:id'
            label="Community"
            value="Community"
            icon={<HandshakeIcon />}
          /> : null}

        <BottomNavigationAction
          component={Link}
          to='/setting'
          label="Setting"
          value="setting"
          icon={<SettingsOutlinedIcon />}
        />
        <BottomNavigationAction label="Logout" value="logout" icon={<LogoutOutlinedIcon />} />
      </BottomNavigation>
    </div>

  )
}

export default Footer