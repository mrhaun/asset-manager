import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getEmployee} from '../features/employees/employeeSlice'
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function EmployeeDetails() {
  const {employee, isLoading, isSuccess, isError, message} = useSelector((state) => state.employee)
  
  const dispatch = useDispatch()
  
  const {employeeId} = useParams()
  
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    dispatch(getEmployee(employeeId))    
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  if (isLoading) {
    return <Spinner />
  }


  return (
<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
<div className="-mx-3 md:flex mb-6">
  <div className="md:w-1/2 px-2">
    <div className="card w-96 bg-base-100 shadow-xl">
    <BackButton url='/employees' />
    <div className="card-body">
      <h2 className="card-title">{employee.firstname} {employee.lastname}</h2>
      <p>{employee.email}</p>
      <p>{employee.site}</p>
      <p>{employee.department}</p>
      <p>{employee.location}</p>
    </div>
    <Link to={`/updateemployee/${employee._id}`} className='btn btn-ghost btn-sm rounded-btn'>
        edit employee</Link>

    </div>
  </div>
</div>
</div>
  )
}

export default EmployeeDetails
