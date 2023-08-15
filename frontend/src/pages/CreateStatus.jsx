import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {createStatus, reset} from '../features/status/statusSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';



function CreateStatus() {
  const [newStatus, setNewStatus] = useState('')
  const {isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.status) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  

  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Status Added')      
      dispatch(reset())      
      navigate('/status') 
    }     
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    } 
  }, [dispatch, isSuccess, isError, updateComplete])

  if (isLoading) {
    return <Spinner />
  }


  const handleAddStatus = (e) => {
    e.preventDefault()

    const assetData ={
      name: newStatus
    }

    dispatch(createStatus(assetData))    
  }



return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/status' />
  </div>
  <form onSubmit={handleAddStatus}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Status
      </label>
      <input name="newStatus" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="newStatus" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Add Status</button>
    </div>
    </div>    
  </form>
</div>
  ) 
}
export default CreateStatus
