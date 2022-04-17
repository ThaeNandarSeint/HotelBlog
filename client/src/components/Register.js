import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const [inputs, setInputs] = useState({
        name: "",
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
        await axios.post('http://localhost:4000/server/register', {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).then(res=>res.data)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/admin/view/rooms/'))
    }

  return (      
    <form onSubmit={handleSubmit} className='mx-auto' style={{width: '50%'}}>
        <h1 className='text-center'>Register Form</h1>
        <div className='form-group mb-3'>
            <label className='form-label'>Username</label>
            <input className='form-control' value={inputs.name} onChange={handleChange} name='name' placeholder='Enter Username' />
        </div>
        <div className='form-group mb-3'>
            <label className='form-label'>Email</label>
            <input className='form-control' value={inputs.email} onChange={handleChange} name='email' placeholder='Enter Email' />
        </div>
        <div className='form-group mb-3'>
            <label className='form-label'>Password</label>
            <input className='form-control' value={inputs.password} onChange={handleChange} name='password' placeholder='Enter Password' />
        </div>
        <button className='btn btn-info'>Register</button>
    </form>
  )
}
