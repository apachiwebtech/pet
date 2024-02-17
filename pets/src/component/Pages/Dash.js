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
import Loader from '../UI/Loader';
const Dash = () => {
  const [feild, setfeild] = useState([])
  const [search, setSearch] = useState('')
  const [count, setCount] = useState([])
  const [hide, setHide] = useState(false)

  async function getDashicon() {
    const data = {
      type: localStorage.getItem("pet_role")
    }

    axios.post(`${BASE_URL}/dashboard`, data)

      .then((res) => {
        setHide(true)
        setfeild(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDashicon()
  }, [])



  async function getCount() {

    const data = {
      user_id: localStorage.getItem("pet_id")
    }
    axios.post(`${BASE_URL}/Servicerequest_count`, data)
      .then((res) => {
        setCount(res.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCount()
  }, [])


  async function getprivate() {
    const data = {
      user_id: localStorage.getItem("pet_id"),

    }
    axios.post(`${BASE_URL}/getPrivate`, data)
      .then((res) => {


        if (res.data) {
          localStorage.setItem('selectedRadioValue', res.data[0].private);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getprivate()
  }, [])

  return (
    <div className='mx-3'>
      <div className='text-center py-3'>
        <p className='hello-text'>Hello, how can we help you</p>
        {/* <Search setSearch={setSearch} /> */}
      </div>
      {hide ?null: <Loader/>}

      {
        hide ? <div className='row text-center pt-3 icon-area'>

          {
            feild.filter((item) => (item.title.toLowerCase()).includes(search.toLowerCase())).map((item, index) => {
              return (
                <div className='col-4 py-2' key={index}>
                  <Link to={`/${item.link}/${item.id}`}><img src={`https://thetalentclub.co.in/pet-app/upload/category/${item.icon}`} className='dash-icon' alt='' /></Link>
                  {/* <img src={`https://myproject-demo.com/pet-app/upload/category/${item.icon}`} className='dash-icon' alt='' /> */}
                  <p>{item.title}</p>
                </div>
              )
            })
          }


          {
            localStorage.getItem("pet_role") == 2 ?
              <div className='col-4 py-2' style={{ position: "relative" }}>
                <Link to="/servicerequest"><img className='dash-icon' src={service} alt='' /></Link>
                <p>Service <br />Request</p>
                <span className='count'>{count.count}</span>
              </div> :
              <div className='col-4 py-2'>
                <Link to="/myappointment"><img className='dash-icon' src={appo} alt='' /></Link>
                <p>My <br />Appointment</p>
              </div>
          }
          {
            localStorage.getItem("pet_role") == 2 ?
              <div className='col-4 py-2'>
                <Link to="/productrequest"><img className='dash-icon' src={order} alt='' /></Link>
                <p>Product  <br /> Request</p>

              </div> :
              <div className='col-4 py-2'>
                <img className='dash-icon' src={order} alt='' />
                <p>My Order <br /> Booking</p>
              </div>
          }

        </div> : null
      }







    </div>

  )
}

export default Dash
