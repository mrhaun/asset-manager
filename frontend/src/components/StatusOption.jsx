import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/status/statusSlice'

function StatusOption() {
  const {statuses, isSuccess, isError, message} = useSelector((state) => state.status) 
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
     
     {statuses.map(status => (
       <option key={status._id}>{status.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default StatusOption