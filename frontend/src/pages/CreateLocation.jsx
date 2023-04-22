import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {createLocation, reset} from '../features/location/locationSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';



function CreateLocation() {
  const [newLocation, setNewLocation] = useState('')
  const {isLoading, isSuccess, isError, updateComplete, message} = useSelector((state) => state.location) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  
  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Asset Added')      
      dispatch(reset())      
      navigate('/locations') 
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


  const handleAddLocation = (e) => {
    e.preventDefault()

    const assetData ={
      name: newLocation
    }

    dispatch(createLocation(assetData))
  }



return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/locations' />
  </div>
  <form onSubmit={handleAddLocation}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Location
      </label>
      <input name="newLocation" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="newLocation" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Add Location</button>
    </div>
    </div>    
  </form>
</div>
  ) 
}
export default CreateLocation
