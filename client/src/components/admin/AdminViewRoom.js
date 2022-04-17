import React from 'react'
import { Link } from 'react-router-dom';

export const AdminViewRoom = (props) => {
  const { _id, title, detail, price, size, capacity } = props.room;
  return (
    <div className='feature-box mb-4'>
      <div className='p-1 rounded feature-price'>
        <div style={{ fontSize: "20px" }}>$ {price}</div>
        <div style={{ fontSize: "10px" }}>per night</div>
      </div>
      <Link className='text-decoration-none text-white p-2 me-3 feature-middle' to={`/admin/update/rooms/${_id}`}>Update</Link>
      <img src='/images/room1.jpg' className='feature-img' />
      <div className='text-center feature-title'>{title}</div>
    </div>
  )
}