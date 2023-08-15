import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';

function Settings() {



  const dispatch = useDispatch()
  const navigate = useNavigate()    
  const {isError, isSuccess, isLoading, message} = useSelector((state) => state.asset)
 




  if (isLoading) {
    return <Spinner />
  }

  return (
<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/' />
  </div>
  <div className="relative py-6">
    <Link to={`/categories/`} className='btn btn-primary'>
          Categories</Link>
  </div>
  <div className="relative py-6">
    <Link to={'/brands'} className='btn btn-primary'>
          Brands</Link>
  </div>
  <div className="relative py-6">
    <Link to={'/sites'} className='btn btn-primary'>
          Sites</Link>
  </div>  
  <div className="relative py-6">
    <Link to={'/departments'} className='btn btn-primary'>
          Departments</Link>
  </div>  
  <div className="relative py-6">
    <Link to={'/locations'} className='btn btn-primary'>
          Locations</Link>
  </div>  
  <div className="relative py-6">
    <Link to={'/employees'} className='btn btn-primary'>
          Employees</Link>
  </div>  
  <div className="relative py-6">
    <Link to={'/status'} className='btn btn-primary'>
          Status</Link>
  </div>            
</div>
  )
}

export default Settings
