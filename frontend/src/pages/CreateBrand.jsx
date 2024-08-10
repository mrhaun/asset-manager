import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {createBrand, reset} from '../features/brands/brandSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';



function CreateBrand() {
  const [newBrand, setNewBrand] = useState('')
  const {isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.brand) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  

  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Brand Added')      
      dispatch(reset())      
      navigate('/brands') 
    }     
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    } 
  }, [dispatch, isSuccess, isError, updateComplete])

  if (isLoading) {
    return <Spinner />
  }


  const handleAddBrand = (e) => {
    e.preventDefault()

    const assetData ={
      name: newBrand
    }

    dispatch(createBrand(assetData))    
  }



return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/brands' />
  </div>
  <form onSubmit={handleAddBrand}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Brand
      </label>
      <input autoFocus name="newBrand" value={newBrand} onChange={(e) => setNewBrand(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="newBrand" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Add Brand</button>
    </div>
    </div>    
  </form>
</div>
  ) 
}
export default CreateBrand
