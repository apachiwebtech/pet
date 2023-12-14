import React from 'react'
import dog from '../../image/dog.png'
import { Link } from 'react-router-dom'
const Splash = () => {
  return (
    <div className='splash-main'>
      <p className='text-end slug py-2'>Your Pet Our App</p>
      <div className='text-center splash-img'>
        <img src={dog} width="100%" alt='' />
        <p>One tap for Grooming</p>
        <p>Boarding, Foods, Health etc.</p>
        <p>for your loving Pet!</p>
      </div>
      <div className='text-center' style={{position : "relative"}}>
        <Link to="/reg"><button className='splash-btn '>
          Get Started
        </button></Link>
        
        <i class="bi bi-caret-right-fill arrow-btn"></i>
      </div>
      <div className='text-center splash-bt-text mx-5'>
        <p>design & developed by pet owners</p>
      </div>
    </div>
  )
}

export default Splash