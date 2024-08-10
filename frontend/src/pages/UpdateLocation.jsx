import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getLocation, updateLocation, deleteLocation} from '../features/locations/locationSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateLocation() {
    const [updatedLocation, setUpdatedLocation] = useState('')
    const {location, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.location)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {locationId} = useParams()
    
    useEffect(() => {
      if(isError){
        toast.error(message)
      } else {
        dispatch(getLocation(locationId))  
        setUpdatedLocation(location.name)  
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/locations')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }      

    }, [dispatch, navigate, isSuccess, updateComplete, isError, message, location.name, locationId])
  
    if (isLoading) {
      return <Spinner />
    }

    
    
    
      const handleUpdateLocation = (e) => {
        e.preventDefault()
    
        const location ={
          name: updatedLocation
        }
        dispatch(updateLocation({location,locationId}))
      }
      const handleDeleteLocation = (e) => {
        e.preventDefault()
    
    
        dispatch(deleteLocation(locationId))
        if(isError){
            toast.error(message)
          }
        if (isSuccess){
            dispatch(reset())
            navigate('/locations')    
          }
    
      }      

  if (isLoading) {
    return <Spinner />
  } 


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/locations' />
  </div>
  <form onSubmit={handleUpdateLocation}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Location
      </label>
      <input autoFocus name="updatedLocation" value={updatedLocation} onChange={(e) => setUpdatedLocation(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedLocation" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Location</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteLocation} className="btn btn-error">Delete Location</button>
  </div>
</div>

  ) 
}
export default UpdateLocation
