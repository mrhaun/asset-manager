import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getBrand, updateBrand, deleteBrand} from '../features/brands/brandSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateBrand() {
    const [updatedBrand, setUpdatedBrand] = useState('')
    const {brand, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.brand)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {brandId} = useParams()

    useEffect(() => { 
      if(isError){
        toast.error(message)
      } else {
        dispatch(getBrand(brandId))  
        setUpdatedBrand(brand.name)   
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/brands')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }
      
    }, [dispatch, isSuccess, updateComplete, isError])
  
    
    const handleUpdateBrand = (e) => {
      e.preventDefault()
  
      const brand ={
        name: updatedBrand
      }
      dispatch(updateBrand({brand,brandId}))
    }
    const handleDeleteBrand = (e) => {
      e.preventDefault()
  
  
      dispatch(deleteBrand(brandId))
      if(isError){
          toast.error(message)
        }
      if (isSuccess){
          dispatch(reset())
          navigate('/brands')    
        }
  
    }        

  if (isLoading) {
    return <Spinner />
  } 
  


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/brands' />
  </div>
  <form onSubmit={handleUpdateBrand}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Brand
      </label>
      <input name="updatedBrand" value={updatedBrand} onChange={(e) => setUpdatedBrand(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedBrand" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Brand</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteBrand} className="btn btn-error">Delete Brand</button>
  </div>
</div>

  ) 
}
export default UpdateBrand
