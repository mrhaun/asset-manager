import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {createSite, reset} from '../features/sites/siteSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';



function CreateSite() {
  const [newSite, setNewSite] = useState('')
  const {isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.site) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  

  useEffect(() => {
    if(isError){
      toast.error(message)
    } 
    if(updateComplete) {
      toast.success('Site Added')      
      dispatch(reset())      
      navigate('/sites') 
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


  const handleAddSite = (e) => {
    e.preventDefault()

    const assetData ={
      name: newSite
    }

    dispatch(createSite(assetData))    
  }



return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/sites' />
  </div>
  <form onSubmit={handleAddSite}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Site
      </label>
      <input name="newSite" value={newSite} onChange={(e) => setNewSite(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="newSite" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Add Site</button>
    </div>
    </div>    
  </form>
</div>
  ) 
}
export default CreateSite
