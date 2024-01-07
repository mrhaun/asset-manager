import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/employees/employeeSlice'

function EmployeeOption() {
  const {employees, isSuccess, isError, message} = useSelector((state) => state.employee) 
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
     
     {employees.map(employee => (
       <option value={employee._id} key={employee._id}>{employee.firstname} {employee.lastname}</option>
      ))}  
  
      </>
    )
  }
  
  export default  EmployeeOption