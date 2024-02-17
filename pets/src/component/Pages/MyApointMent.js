import React, { useEffect, useState } from 'react'
import img from '../icon/order.png'
import { BASE_URL } from '../Utils/BaseUrl'
import img1 from '../../image/clinic1.png'
import axios from 'axios'
const MyApointment = () => {
  const [data, setData] = useState([])

  async function getAppointDetails() {
    const data = {
      user_id: localStorage.getItem("pet_id")
    }


    axios.post(`${BASE_URL}/getappoint_detail`, data)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAppointDetails()
  }, [])



  return (
    <div style={{ paddingBottom: "70px" }}>
      {
        data.map((item) => {
          const timestampStr = item.book_date; // Assuming item.book_date is the timestamp string
          const timestamp = new Date(timestampStr);

          // Extracting components
          const day = String(timestamp.getDate()).padStart(2, '0');
          const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Months are zero-based
          const year = String(timestamp.getFullYear()).slice(2);
          
          const formattedDate = `${day + "/"} ${month + '/'} ${year}`;
          const options = { hour: '2-digit', minute: '2-digit', second: 'none' };
          // const timeComponent = timestamp.toLocaleTimeString(options)
          const timeComponent = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });




          return (
            <div className={`card p-2 m-3 ${item.status == 0 ? 'border-warning' : 'border-success'}`}>
              <div className='d-flex'>
                <div className='p-1 border border-1 mx-2 apoint-frame' >
                  <img src={`https://thetalentclub.co.in/pet-app/upload/subcategory/` + item.upload_image} width="100px" alt='' />
                </div>
                <div>
                  <h2 className='appo-title'>{item.title}</h2>
                  <p>Date : {formattedDate}</p>
                  <p>Time : {timeComponent}</p>

                </div>
              </div>
              <hr />
              <div className='d-flex'>
                <b>Status : </b>
                {
                  item.status == 0 ? <p className='text-warning mx-2'> Pending <i class="bi bi-emoji-frown"></i></p> : <p className='text-success mx-2'> Accepted <i class="bi bi-emoji-smile"></i> <span className='text-dark'>(Wait for the Call)</span></p>
                }

              </div>
            </div>
          )

        })
      }

    </div>
  )
}

export default MyApointment