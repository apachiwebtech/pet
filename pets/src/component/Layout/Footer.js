import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
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
      <BottomNavigation sx={{ width: "100%" ,background : "green" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          to='/'
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
          selected
        />
        <BottomNavigationAction
        component={Link}
        to='/pet/:id'
          label="Profile"
          value="profile"
          icon={<PetsOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Location"
          value="location"
          icon={<LocationOnOutlinedIcon />}
        />
         <BottomNavigationAction
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