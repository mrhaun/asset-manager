import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/departments/departmentSlice'

function DepartmentOption() {
  const {departments, isSuccess, isError, message} = useSelector((state) => state.department) 
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
     
     {departments.map(department => (
       <option key={department._id}>{department.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default DepartmentOption