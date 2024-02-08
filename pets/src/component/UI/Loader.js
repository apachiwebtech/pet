import React from 'react'
import paw from '../../image/paw.gif'
const Loader = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className='d-flex justify-content-center loader'  >
        <img src={paw} alt='' width="50px" />
      </div>
    </div>

  )
}

export default Loader