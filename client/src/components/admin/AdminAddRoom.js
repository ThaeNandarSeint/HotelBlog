import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AdminAddRoom = () => {
    const [inputs, setInputs] = useState({
        title: '',
        detail: '',
        price: '',
        size: '',
        capacity: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin/view/rooms'))
    }

    const sendRequest = async () => {
        await axios.post('http://localhost:4000/rooms', {
            title: String(inputs.title),
            detail: String(inputs.detail),
            price: Number(inputs.price),
            size: Number(inputs.size),
            capacity: Number(inputs.capacity)
        }).then((res)=>res.data)
    }

    return (
        <form onSubmit={handleSubmit} className='mx-auto' style={{ width: '70%' }}>
            <div className='form-group mb-3'>
                <label className='form-label'>Title:</label>
                <input name='title' className='form-control' placeholder='Title' value={inputs.title} onChange={handleChange} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Detail:</label>
                <input name='detail' className='form-control' placeholder='Detail' value={inputs.detail} onChange={handleChange} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Price:</label>
                <input type='number' name='price' className='form-control' placeholder='Price' value={inputs.price} onChange={handleChange} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Size:</label>
                <input type='number' name='size' className='form-control' placeholder='Size' value={inputs.size} onChange={handleChange} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Capacity:</label>
                <input type='number' name='capacity' className='form-control' placeholder='Capacity' value={inputs.capacity} onChange={handleChange} />
            </div>
            <button className='btn btn-info'>Add Room</button>
        </form>
    )
}
