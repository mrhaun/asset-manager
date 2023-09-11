import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {updateStatus, getAsset, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';
import EmployeeOption from '../components/EmployeeOption';

function UpdateAssetStatus() {

  const [newstatus, setNewStatus] = useState('') 
  const [employeeName, setEmployeeName] = useState('')
  const [checkOutTo, setcheckOutTo] = useState(true)
  
  
  
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

      setSite(asset.site)
      setDepartment(asset.department)
      setLocation(asset.location)
      setNewStatus ((asset.status === 'available') ? 'Check In' : 'Check Out')

    }  
    return () => {
      if(updateComplete){
        dispatch(reset())
        navigate(`/assetdetails/${assetId}`)             
      }
      if(isSuccess) {
        dispatch(reset())
      }
    }
    
  }, [dispatch, isSuccess, updateComplete, isError])


  const onSubmit = (e) => {
    e.preventDefault()

    const eventData ={       
      site,
      department,
      location,
      newstatus,
      employeeName            
    }

    dispatch(updateStatus({assetId,eventData}))
    

  }


  if (isLoading) {
    return <Spinner />
  }
  console.log(checkOutTo)


  return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
<Link to={`/assetdetails/${assetId}`} className='btn btn-reverse btn-back'>
      <FaArrowCircleLeft />Back
  </Link>
<form onSubmit={onSubmit}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3">
        <label className="label"  htmlFor="status">
            Status
        </label>
        <div className="relative">
            <select name="newstatus" value={newstatus} onChange={(e) => setNewStatus(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="status">
            <option>Check Out</option>
            <option>Check In</option>
            <option>Dispose</option>                        
            </select>
        </div>
    </div>
  </div>  

    {newstatus == 'Check Out' ? (<>
      <div className="-mx-2 md:flex mb-3">
        <div className="md:w-1/6 px-3">
          <label className="label cursor-pointer">
            <span className="label-text">Check Out To: </span>
          </label>                                             
          <label className="label cursor-pointer">
            <span className="label-text">Person</span>
            <input type="radio"  name="checkoutto" value={checkOutTo} onChange={(e) => setcheckOutTo(e.target.value)} className="radio radio" checked />
            </label>                    
          <label className="label cursor-pointer">
            <span className="label-text">Site</span>                        
            <input type="radio" name="checkoutto" value={checkOutTo} onChange={(e) => setcheckOutTo(e.target.value)} className="radio radio"/>
            </label>
        </div>
      </div>

        
        {checkOutTo ? (<>
        <div className="-mx-3 md:flex mb-6">          
            <div className="md:w-1/2 px-3">
              <label className="label"  htmlFor="employee">
                  Employee Name
              </label>
              <div className="relative">
                  <select name="employee" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="employee">
                  <EmployeeOption/>
                  </select>
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
              </div>
            </div>
          </div>  
        </>

        ) :  (<>  

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="site">
              Site
            </label>
            <div className="relative">
              <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
                <SiteOption/>
              </select>
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
            </div>
          </div>
        </div>  
        </>
      ) }
    </>
    ): null}


      
    {newstatus === 'Check In' ? (<>

      <div className="-mx-2 md:flex mb-3">
        <div className="md:w-1/6 px-3">
          <label className="label cursor-pointer">
            <span className="label-text">Check In To: </span>
          </label>           
        </div>  
      </div>  
      <div className="-mx-3 md:flex mb-6">        
          <div className="md:w-1/2 px-3">
            <label className="label"  htmlFor="site">
              Site
            </label>
            <div className="relative">
              <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
                <SiteOption/>
              </select>
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
            </div>
          </div>
      </div>
      </>
    )

    : null}    

    <div className="form-control mt-6">
      <div className="relative">
        <button className="btn btn-primary">Update Asset Status</button>
      </div>
    </div>  
   
  </form>
</div>


  )
}

export default UpdateAssetStatus
