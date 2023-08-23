import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {updateEmployee, getEmployee, deleteEmployee, reset} from '../features/employees/employeeSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';

import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';

function UpdateEmployee() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('') 
  const [site, setSite] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()    
  const {employee, isError, updateComplete, isSuccess, isLoading, message} = useSelector((state) => state.employee)
  const {employeeId} = useParams()  
 

  useEffect(() => { 
    if(isError){
      toast.error(message)
    } else {
      dispatch(getEmployee(employeeId))  
      setFirstName(employee.firstname)
      setLastName(employee.lastname)
      setEmail(employee.email)
      setSite(employee.site)
      setDepartment(employee.department)
      setLocation(employee.location)

    }  
    return () => {
      if(updateComplete){
        dispatch(reset())
        navigate('/employees')             
      }
      if(isSuccess) {
        dispatch(reset())
      }
    }
    
  }, [dispatch, isSuccess, updateComplete, isError])


  const onSubmit = (e) => {
    e.preventDefault()

    const employeeData ={
      firstName,
      lastName,
      email,
      site,
      department,
      location 
    }

    dispatch(updateEmployee({employeeId,employeeData}))
  }
  const handleDeleteEmployee = (e) => {
    e.preventDefault()


    dispatch(deleteEmployee(employeeId))
    if(isError){
        toast.error(message)
      }
    if (isSuccess){
        dispatch(reset())
        navigate('/employees')    
      }

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
      <input name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="firstname" type="text" /> 
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="category">
        Last Name
      </label>
      <input name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="lastname" type="text"/>
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
        <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
          <SiteOption/>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="department">
        Department
      </label>
      <div className="relative">
        <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
          <DepartmentOption/>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="location">
        Location
      </label>
      <div className="relative">
        <select name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
          <LocationOption/>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Create Employee</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteEmployee} className="btn btn-error">Delete Employee</button>
  </div>    
</div>


  )
}

export default UpdateEmployee
