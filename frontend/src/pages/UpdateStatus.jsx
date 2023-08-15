import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getStatus, updateStatus, deleteStatus} from '../features/status/statusSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateStatus() {
    const [updatedStatus, setUpdatedStatus] = useState('')
    const {status, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.status)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {statusId} = useParams()

    useEffect(() => { 
      if(isError){
        toast.error(message)
      } else {
        dispatch(getStatus(statusId))  
        setUpdatedStatus(status.name)   
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/status')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }
      
    }, [dispatch, isSuccess, updateComplete, isError])
  
    
    const handleUpdateStatus = (e) => {
      e.preventDefault()
  
      const status ={
        name: updatedStatus
      }
      dispatch(updateStatus({status,statusId}))
    }
    const handleDeleteStatus = (e) => {
      e.preventDefault()
  
  
      dispatch(deleteStatus(statusId))
      if(isError){
          toast.error(message)
        }
      if (isSuccess){
          dispatch(reset())
          navigate('/status')    
        }
  
    }        

  if (isLoading) {
    return <Spinner />
  } 
  


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/status' />
  </div>
  <form onSubmit={handleUpdateStatus}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Status
      </label>
      <input name="updatedStatus" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedStatus" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Status</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteStatus} className="btn btn-error">Delete Status</button>
  </div>
</div>

  ) 
}
export default UpdateStatus
