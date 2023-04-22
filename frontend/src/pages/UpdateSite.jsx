import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getSite, updateSite, deleteSite} from '../features/sites/siteSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateSite() {
    const [updatedSite, setUpdatedSite] = useState('')
    const {site, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.site)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {siteId} = useParams()
    
    useEffect(() => {
      if(isError){
        toast.error(message)
      } else {
        dispatch(getSite(siteId))  
        setUpdatedSite(site.name)  
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/sites')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }      

    }, [dispatch, navigate, isSuccess, updateComplete, isError, message, site.name, siteId])
  
    if (isLoading) {
      return <Spinner />
    }

    
    
    
      const handleUpdateSite = (e) => {
        e.preventDefault()
    
        const siteData ={
          name: updatedSite
        }
        dispatch(updateSite({siteData,siteId}))
      }
      const handleDeleteSite = (e) => {
        e.preventDefault()
    
    
        dispatch(deleteSite(siteId))
        if(isError){
            toast.error(message)
          }
        if (isSuccess){
            dispatch(reset())
            navigate('/sites')    
          }
    
      }      

  if (isLoading) {
    return <Spinner />
  } 


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/sites' />
  </div>
  <form onSubmit={handleUpdateSite}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Site
      </label>
      <input name="updatedSite" value={updatedSite} onChange={(e) => setUpdatedSite(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedSite" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Site</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteSite} className="btn btn-error">Delete Site</button>
  </div>
</div>

  ) 
}
export default UpdateSite
