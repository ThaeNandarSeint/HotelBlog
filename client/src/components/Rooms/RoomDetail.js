import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'


export const RoomDetail = (props) => {
    const [room, setRoom] = useState({})
    // fetch id
    const id = useParams().id
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:4000/rooms/${id}`)
                .then((res) => res.data).then(data => setRoom(data.room))
        }
        fetchHandler();
    }, [id])
    return (
        <div className='container'>
            <div className='room-bg'>
                <div className='room-box mx-auto p-3'>
                    <h1 className='text-center home-h1'>{room.title}</h1>
                    <hr className='hr mx-auto'></hr>
                    <div className='room-btn mx-auto text-center rounded py-2'>
                        <Link className='text-decoration-none text-white' to='/rooms'>BACK TO ROOMS</Link>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                <img src='/images/room1.jpg' className='feature-img' />
                <img src='/images/room2.jpg' className='feature-img' />
                <img src='/images/room3.jpg' className='feature-img' />
            </div>
            {/* detail */}
            <div className='d-flex justify-content-between mt-5'>
                <div className='' style={{ width: "45%" }}>
                    <h3>Details</h3>
                    <p>{room.detail}</p>
                </div>
                <div className='' style={{ width: "45%" }}>
                    <h3>Info</h3>
                    <p>Price : $ {room.price}</p>
                    <p>Size : {room.size} SQFT</p>
                    <p>Max Capacity : {room.capacity} People</p>
                    <p>Pets Allowed</p>
                    <p>Free Breakfast Included</p>
                </div>
            </div>
            {/* extra */}
            <h4 className='mt-4'>Extras</h4>
            <div className='d-flex justify-content-between mt-4'>
                <div className='' style={{ width: "30%" }}>
                    <p>- Plush pillows and breathable bed linens</p>
                    <p>- Complimentary refreshments</p>
                    <p>- Comfortable beds</p>
                </div>
                <div className='' style={{ width: "30%" }}>
                    <p>- Soft, oversized bath towels</p>
                    <p>Adequates safety/security</p>
                </div>
                <div className='' style={{ width: "30%" }}>
                    <p>- Full-sized, pH-balanced tolletries</p>
                    <p>- Internet</p>
                </div>
            </div>
        </div>
    )
}
