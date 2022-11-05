import React, { useState, useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'



function Login() {

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = FormData

    const onChange = (e) => {
        setFormData((prevState) => ({ 
            ...prevState,
            [e.target.email]: e.target.value

        }))
    }
    const onSubmit = (e) => {
      e.preventDefault()


    }


    return (

<div class="hero min-h-screen bg-base-200">
<form onSubmit={e => {
      e.preventDefault();  
  }}>    
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login</h1>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" onChange={onChange} required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" onChange={onChange} required />
          <label class="label">
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</div>


  )
}

export default Login
