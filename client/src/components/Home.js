import React from 'react'
import { Link } from 'react-router-dom'
import { Features } from './Features'
import { Services } from './Services'

export const Home = () => {
  return (
    <div>
      <div className='home-bg'>
        <div className='home-box p-3'>
          <h1 className='text-center home-h1'>Luxurious Rooms</h1>
          <hr className='hr mx-auto'></hr>
          <p className='text-center'>Deluxe Rooms Starting At 40000 MMK</p>
          <div className='home-btn mx-auto text-center rounded py-2'>
            <Link className='text-decoration-none text-white' to='/rooms'>OUR ROOMS</Link>
          </div>
        </div>
      </div>
      <Services />
      <Features />
    </div>
  )
}
