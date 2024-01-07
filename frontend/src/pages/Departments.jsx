import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/departments/departmentSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import DepartmentItem from '../components/DepartmentItem.jsx';

function Departments() {
  const {departments, isLoading, isSuccess, isError, message} = useSelector((state) => state.department) 
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
            Departments
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">

      {departments.map(department => (
        <DepartmentItem key={department._id} department={department} />
      ))}   
      </tbody>
    </table>
    </div>
  </div>  
  <div className="relative py-6">
    <Link to={'/createdepartment'} className='btn btn-primary'>
          Add Department</Link>
  </div>
</div>

  ) 
}
export default Departments
