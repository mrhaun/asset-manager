import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner';


function Register() {

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = FormData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
      if (isSuccess || user) {
        navigate('/')

      }
      dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({ 
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }
    const onSubmit = (e) => {
      e.preventDefault()

      const userData ={
        email,
        password
      }

      dispatch(register(userData))

    }

    if (isLoading) {
      return <Spinner />
    }

    return (

<div className="hero min-h-screen bg-base-200">
<form onSubmit={onSubmit}>    
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register new account </h1>
      <p className="py-6">Provident cupiditate voluptatem et in ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" value={email} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" onChange={onChange} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" value={password} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" onChange={onChange} required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</div>


  )
}

export default Register
