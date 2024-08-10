import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {createEmployee, reset} from '../features/employees/employeeSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';

import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';

function AddEmployee() {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('') 


  const dispatch = useDispatch()
  const navigate = useNavigate()    
  const {isError, updateComplete, isSuccess, isLoading, message} = useSelector((state) => state.employee)

  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Employee Added')      
      dispatch(reset())      
      navigate('/employees') 
    }     
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }  
  }, [dispatch, isSuccess, isError, updateComplete])


  const onSubmit = (e) => {
    e.preventDefault()

    const employeeData ={
      firstname,
      lastname,
      email,
      site: e.target.site.value,
      department: e.target.department.value,
      location: e.target.location.value 
    }

    dispatch(createEmployee(employeeData))

  }

  if (isLoading) {
    return <Spinner />
  }

  return (

<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <BackButton url='/' />
<form onSubmit={onSubmit}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label" htmlFor="firstName">
        First Name
      </label>
      <input autoFocus name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="firstname" type="text" /> 
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="category">
        Last Name
      </label>
      <input name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="lastname" type="text"/>
    </div> 
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="email">
       Email
      </label>
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="email" type="text"/>
      <p className="text-red text-xs italic">Please fill out this field.</p>   
    </div>            
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="site">
        Site
      </label>
      <div className="relative">
        <select name="site" className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
          <SiteOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="department">
        Department
      </label>
      <div className="relative">
        <select name="department" className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
          <DepartmentOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="location">
        Location
      </label>
      <div className="relative">
        <select name="location" className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
          <LocationOption/>
        </select>
      </div>
    </div>
  </div>
  <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Create Employee</button>
    </div>
    </div>    
  </form>
</div>


  )
}

export default AddEmployee
