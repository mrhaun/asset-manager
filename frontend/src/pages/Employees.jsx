import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/employees/employeeSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import EmployeeItem from '../components/EmployeeItem.jsx';

function Employees() {
  const {employees, isLoading, isSuccess, isError, message} = useSelector((state) => state.employee) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    if(isError){
      toast.error(message)
    }
    return () => {

      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError, message])





  if (isLoading) {
    return <Spinner />
  } 

return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/settings' />
  </div>
  <div className="card w-96 max-h-96 bg-base-100 shadow-xl">
    <div className="card-body overflow-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th>
            Employee
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">

      {employees.map(employee => (
        <EmployeeItem key={employee._id} employee={employee} />
      ))}   
      </tbody>
    </table>
    </div>
  </div>  
  <div className="relative py-6">
    <Link to={'/createemployee'} className='btn btn-primary'>
          Add Employee</Link>
  </div>
</div>

  ) 
}
export default Employees
