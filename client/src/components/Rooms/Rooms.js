import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useState, useEffect } from 'react';
import { Room } from './Room';

const URL = "http://localhost:4000/rooms";

const fetchHandler = async () => {
    return await axios.get(URL)
        .then(res => res.data)
}

export const Rooms = () => {
    const [rooms, setRooms] = useState()
    useEffect(() => {
        fetchHandler().then(data => setRooms(data.rooms))
    }, [])
    return (
        <div>
            <div className='rooms-bg'>
                <div className='rooms-box mx-auto p-3'>
                    <h1 className='text-center home-h1'>Our Rooms</h1>
                    <hr className='hr mx-auto'></hr>
                    <p className='text-center'>Deluxe Rooms Starting At 40000 MMK</p>
                    <div className='rooms-btn mx-auto text-center rounded p-2'>
                        <Link className='text-decoration-none text-white' to='/'>RETURN HOME</Link>
                    </div>
                </div>
            </div>
            {/* search */}
            <div className='container mt-5'>
                <h1 className='text-center'>Search Rooms</h1>
                <hr className='home-hr mx-auto'></hr>
                <div className='d-flex justify-content-between'>
                    <div className='form-group' style={{ width: "18%" }} >
                        <label className='form-label'>Room Type</label>
                        <select className="form-select">
                            <option selected disabled value="">All</option>
                            <option>Triple</option>
                            <option>Family</option>
                            <option>Double</option>
                            <option>Single</option>
                        </select>
                    </div>
                    <div className='form-group' style={{ width: "18%" }} >
                        <label className='form-label'>Guests</label>
                        <input className='form-control' type="number" />
                    </div>
                    <div className='form-group' style={{ width: "18%" }} >
                        <label className='form-label'>Room Price $600</label>
                        <input type="range" className="form-range" />
                    </div>
                    <div className='form-group' style={{ width: "18%" }} >
                        <label className='form-label'>Room Size</label>
                        <div className='d-flex justify-content-between'>
                            <input className='form-control' type="number" style={{ width: "45%" }} />
                            <input className='form-control' type="number" style={{ width: "45%" }} />
                        </div>
                    </div>
                    <div className='form-group' style={{ width: "18%" }} >
                        <label className='form-label'>Room Type</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Breakfast
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Pets
                            </label>
                        </div>
                    </div>
                </div>
                {/* display room */}
                <div className='d-flex flex-wrap justify-content-between mt-5'>
                    {rooms && rooms.map((room, i) => (
                        <div key={i}>
                            <Room room={room} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
