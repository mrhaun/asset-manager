import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {updateAsset, getAsset, deleteAsset, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';

import StatusOption from '../components/StatusOption';

import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';
import EmployeeOption from '../components/EmployeeOption';

function UpdateAssetStatus() {

  const [status, setStatus] = useState('') 
  const [employeeName, setEmployeeName] = useState('')
  const [checkOutPerson, setCheckOutPerson] = useState('')
  const [checkOutSite, setCheckOutSite] = useState('')
  const [checkInLocation, setCheckInLocation] = useState('')

  
  
  const [site, setSite] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const {assetId} = useParams()  
  const {asset, isError, isSuccess, updateComplete, isLoading, message} = useSelector((state) => state.asset)
 

  useEffect(() => { 
    if(isError){
      toast.error(message)
    } else {
      dispatch(getAsset(assetId))  
      setStatus(asset.status)
      setSite(asset.site)
      setDepartment(asset.department)
      setLocation(asset.location)

    }  
    return () => {
      if(updateComplete){
        dispatch(reset())
        navigate('/assetlist')             
      }
      if(isSuccess) {
        dispatch(reset())
      }
    }
    
  }, [dispatch, isSuccess, updateComplete, isError])


  const onSubmit = (e) => {
    e.preventDefault()

    const assetData ={

      site,
      department,
      location 
    }

    dispatch(updateAsset({assetId,assetData}))

  }
  const handleDeleteAsset = (e) => {
    e.preventDefault()


    dispatch(deleteAsset(assetId))
    if(isError){
        toast.error(message)
      }
    if (isSuccess){
        dispatch(reset())
        navigate('/assetlist')    
      }

  }  

  if (isLoading) {
    return <Spinner />
  }


  return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <BackButton url='/assetlist' />
<form onSubmit={onSubmit}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3">
        <label className="label"  htmlFor="status">
            Status
        </label>
        <div className="relative">
            <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="status">
            <StatusOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>

    {status == 'Check Out' ? null


      : (<>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Person</span> 
            <input type="checkbox" name="checkOutPerson" value={checkOutPerson} onChange={(e) => setCheckOutPerson(e.target.value)} className="checkbox" checked />
            <span className="label-text">Site</span>
            <input type="checkbox" name="checkOutSite" value={checkOutSite} onChange={(e) => setCheckOutSite(e.target.value)} className="checkbox" checked />
          </label>
        </div>
        {checkOutPerson ? null


        : (<>        
        <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="employee">
                Employee Name
            </label>
            <div className="relative">
                <select name="employee" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="employee">
                <EmployeeOption/>
                </select>
                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="site">
            Site
          </label>
          <div className="relative">
            <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
              <SiteOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="department">
            Department
          </label>
          <div className="relative">
            <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
              <DepartmentOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="location">
            Location
          </label>
          <div className="relative">
            <select name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
              <LocationOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        </>
      ) }
      {checkOutSite ? null


      : (<>       
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="site">
            Site
          </label>
          <div className="relative">
            <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
              <SiteOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="department">
            Department
          </label>
          <div className="relative">
            <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
              <DepartmentOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlFor="location">
            Location
          </label>
          <div className="relative">
            <select name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
              <LocationOption/>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        </>
      ) }
    </>
    ) }  
      
    {status == 'Check In' ? null


    : (<>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Check back in to the same Location</span> 
            <input type="checkbox" name="checkInLocation" value={checkInLocation} onChange={(e) => setCheckInLocation(e.target.value)} className="toggle" checked />
          </label>
        </div>
        {checkInLocation ? null


        : (<>            
          <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="site">
              Site
            </label>
            <div className="relative">
              <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
                <SiteOption/>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="department">
              Department
            </label>
            <div className="relative">
              <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
                <DepartmentOption/>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="location">
              Location
            </label>
            <div className="relative">
              <select name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
                <LocationOption/>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          </>
        ) }  
      </>  
      ) }    

    <div className="form-control mt-6">
      <div className="relative">
        <button className="btn btn-primary">Update Asset Status</button>
      </div>
    </div>  
  </div>    
  </form>
</div>


  )
}

export default UpdateAssetStatus
