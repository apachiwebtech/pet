import StoreIcon from '@mui/icons-material/Store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../UI/SearchField';
import { BASE_URL } from '../Utils/BaseUrl';
import appo from '../icon/cal.png'
import order from '../icon/order.png'
import service from '../icon/service.png'
import product from '../icon/product.png'
const Dash = () => {
  const [feild, setfeild] = useState([])
  const [search, setSearch] = useState('')
  async function getDashicon() {
    const data = {
      type: localStorage.getItem("pet_role")
    }

    axios.post(`${BASE_URL}/dashboard`, data)

      .then((res) => {
        setfeild(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDashicon()
  }, [])

  // console.log(feild);
  // const handlesearch = (e) =>{
  // setSearch(e.target.value)
  // }

  return (
    <div className='mx-3'>
      <div className='text-center '>
        <p className='hello-text'>Hello, how can we help you</p>
        <Search setSearch={setSearch} />
      </div>


      <div className='row text-center pt-3 icon-area'>

        {
          feild.filter((item) => (item.title.toLowerCase()).includes(search.toLowerCase())).map((item, index) => {
            return (
              <div className='col-4 py-2'>
                <Link to={`/${item.link}/${item.id}`}><img src={`https://thetalentclub.co.in/pet-app/upload/category/${item.icon}`} className='dash-icon' alt='' /></Link>
                {/* <img src={`https://myproject-demo.com/pet-app/upload/category/${item.icon}`} className='dash-icon' alt='' /> */}
                <p>{item.title}</p>
              </div>
            )
          })
        }

      </div>
      <hr />
      <div className='d-flex justify-content-between text-center icon-area'>

        {
          localStorage.getItem("pet_role") == 2 ?
           <Link to="/servicerequest"><div className=''>
           <img className='dash-icon' src={service} alt='' />
           <p>Service <br />Request</p>
         </div></Link>  :
            <Link to="/myappointment"><div className=''>
              <img className='dash-icon' src={appo} alt=''/>
              <p>My <br />Appointment</p>
            </div></Link>
        }
        {
          localStorage.getItem("pet_role") == 2 ?
          <div className=' '><Link to="/productrequest">
              <img className='dash-icon' src={order} alt='' />
              <p>Product  <br /> Request</p>
              </Link> </div>:
            <div className=' '>
              <img className='dash-icon' src={order} alt='' />
              <p>My Order <br /> Booking</p>
            </div>
        }

      </div>
    </div>
  )
}

export default Dash
