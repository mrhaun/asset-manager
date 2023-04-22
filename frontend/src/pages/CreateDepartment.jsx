import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {createDepartment, reset} from '../features//department//departmentSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';



function CreateDepartment() {
  const [newDepartment, setNewDepartment] = useState('')
  const {isLoading, isSuccess, isError, updateComplete, message} = useSelector((state) => state.department) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  
  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Asset Added')      
      dispatch(reset())      
      navigate('/department') 
    }     
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    } 
  }, [navigate, dispatch, isSuccess, isError, updateComplete])

  if (isLoading) {
    return <Spinner />
  }


  const handleAddDepartment = (e) => {
    e.preventDefault()

    const assetData ={
      name: newDepartment
    }

    dispatch(createDepartment(assetData))
  }



return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/categories' />
  </div>
  <form onSubmit={handleAddDepartment}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Department
      </label>
      <input name="newDepartment" value={newDepartment} onChange={(e) => setNewDepartment(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="newDepartment" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Add Department</button>
    </div>
    </div>    
  </form>
</div>
  ) 
}
export default CreateDepartment
