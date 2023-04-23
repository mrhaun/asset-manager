import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/locations/locationSlice'

function LocationOption() {
  const {locations, isSuccess, isError, message} = useSelector((state) => state.location) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    if(isError){
      console.log(message)
    }
    return () => {

      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError, message])



    return (
      <>
     
     {locations.map(location => (
       <option key={location._id}>{location.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default LocationOption