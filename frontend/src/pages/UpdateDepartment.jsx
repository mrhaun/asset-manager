import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getDepartment, updateDepartment, deleteDepartment} from '../features/departments/departmentSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateDepartment() {
    const [updatedDepartment, setUpdatedDepartment] = useState('')
    const {department, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.department)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {departmentId} = useParams()
     
    useEffect(() => {
      if(isError){
        toast.error(message)
      } else {
        dispatch(getDepartment(departmentId))  
        setUpdatedDepartment(department.name)  
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/departments')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }      

    }, [dispatch, navigate, isSuccess, updateComplete, isError, message, department.name, departmentId])
  
    if (isLoading) {
      return <Spinner />
    }

    
    
    
      const handleUpdateDepartment = (e) => {
        e.preventDefault()
    
        const departmentData ={
          name: updatedDepartment
        }
        dispatch(updateDepartment({departmentData,departmentId}))
      }
      const handleDeleteDepartment = (e) => {
        e.preventDefault()
    
    
        dispatch(deleteDepartment(departmentId))
        if(isError){
            toast.error(message)
          }
        if (isSuccess){
            dispatch(reset())
            navigate('/departments')    
          }
    
      }      

  if (isLoading) {
    return <Spinner />
  } 


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/departments' />
  </div>
  <form onSubmit={handleUpdateDepartment}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Department
      </label>
      <input name="updatedDepartment" value={updatedDepartment} onChange={(e) => setUpdatedDepartment(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedDepartment" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Department</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteDepartment} className="btn btn-error">Delete Department</button>
  </div>
</div>

  ) 
}
export default UpdateDepartment
