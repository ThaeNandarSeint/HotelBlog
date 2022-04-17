import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const history = useNavigate();

    const sendRequest = async ()=>{
        await axios.post('http://localhost:4000/server/login', {
            email: inputs.email,
            password: inputs.password
        }).then(res=>res.data)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/admin/view/rooms/'))
    }
    return (
        <form onSubmit={handleSubmit} className='mx-auto' style={{ width: '50%' }}>
            <h1 className='text-center'>Login Form</h1>
            <div className='form-group mb-3'>
                <label className='form-label'>Email</label>
                <input className='form-control' value={inputs.email} onChange={handleChange} name='email' placeholder='Enter Email' />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Password</label>
                <input className='form-control' name='password' value={inputs.password} onChange={handleChange} placeholder='Enter Password' />
            </div>
            <button className='btn btn-info'>Login</button>
        </form>
    )
}
