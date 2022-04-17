import React from 'react'
import { Link } from 'react-router-dom';

export const Room = (props) => {
  const { _id, title, detail, price, size, capacity } = props.room;
  return (
    <div className='feature-box mb-4'>
      <div className='p-1 rounded feature-price'>
        <div style={{ fontSize: "20px" }}>$ {price}</div>
        <div style={{ fontSize: "10px" }}>per night</div>
      </div>
      {/* <div className='p-2 feature-middle'>FEATURES</div> */}
      <Link className='text-decoration-none text-white p-2 feature-middle' to={`/rooms/${_id}`}>FEATURES</Link>
      <img src='/images/room1.jpg' className='feature-img' />
      <div className='text-center feature-title'>{title}</div>
    </div>
  )
}
