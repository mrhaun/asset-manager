import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {updateAsset, getAsset, deleteAsset, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import CategoryOption from '../components/CategoryOption';
import BrandOption from '../components/BrandOption';
import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';

function EditAsset() {

  const [assettag, setAssettag] = useState('') 
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('') 
  const [model, setModel] = useState('')
  const [description, setDescription] = useState('')
  const [serialnumber, setSerialnumber] = useState('')  
  const [purchasedate, setPurchasedate] = useState('')
  const [cost, setCost] = useState('')
  const [estimatedvalue, setEstimatedvalue] = useState('')
  const [warrantystartdate, setwarrantystartdate] = useState('')  
  const [warrantyenddate, setwarrantyenddate] = useState('')
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
      setAssettag(asset.assettag)
      setCategory(asset.category)
      setBrand(asset.brand)
      setModel(asset.model)
      setDescription(asset.description)
      setSerialnumber(asset.serialnumber)
      setPurchasedate(asset.purchasedate)
      setCost(asset.cost)
      setEstimatedvalue(asset.estimatedvalue)
      setwarrantystartdate(asset.warrantystartdate)
      setwarrantyenddate(asset.warrantyenddate)
      setSite(asset.site)
      setDepartment(asset.department)
      setLocation(asset.location)

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

    const assetData ={
      assettag,
      category,
      brand,
      model,
      description,
      serialnumber,
      purchasedate,
      cost,
      estimatedvalue,
      warrantystartdate,
      warrantyenddate,
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
        navigate(`/assetdetails/${assetId}`)    
      }

  }  

  if (isLoading) {
    return <Spinner />
  }


  return (
<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">  
<form onSubmit={onSubmit}>
  <div className="form-control mt-6">
    <div className="relative">
      <Link to={`/assetdetails/${assetId}`} className='btn btn-reverse btn-back'>
        <FaArrowCircleLeft />Back
      </Link>
    </div>
  </div>    


  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label" htmlFor="assettag">
        Asset Tag
      </label>
      <input name="assettag" value={assettag} onChange={(e) => setAssettag(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="assettag" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="category">
        Category
      </label>
      <div className="relative">
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="category">
          <CategoryOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="brand">
        Brand
      </label>
      <div className="relative">
        <select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="brand">
          <BrandOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="model">
        Model
      </label>
      <input name="model" value={model} onChange={(e) => setModel(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="model" type="text"/>
    </div>         
  </div>
  <div className="-mx-3 md:flex mb-6">
  <div className="md:w-full px-3">    
      <label className="label" htmlFor="description">
        Description
      </label>
      <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="description" type="text"/>
    </div>  
  </div>  
  <div className="-mx-3 md:flex mb-6">    
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="serialnumber">
       Serial Number
      </label>
      <input name="serialnumber" value={serialnumber} onChange={(e) => setSerialnumber(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serialnumber" type="text"/>
    </div>     
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="purchasedate">
        Purchase Date
      </label>
      <input name="purchasedate" value={purchasedate} onChange={(e) => setPurchasedate(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="purchasedate" type="date"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="cost">
       Cost
      </label>
      <input name="cost" value={cost} onChange={(e) => setCost(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="cost" type="text"/>
    </div>   
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="value">
       Estimated Value
      </label>
      <input name="estimatedvalue" value={estimatedvalue} onChange={(e) => setEstimatedvalue(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="value" type="text"/>
    </div>   
  </div>   
  <div className="-mx-3 md:flex mb-6">    
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="warrantystartdate">
       Warranty Start Date
      </label>
      <input name="warrantystartdate" value={warrantystartdate} onChange={(e) => setwarrantystartdate(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="warrantystartdate"  type="date"/>
    </div>     
    <div className="md:w-1/2 px-3">
      <label className="label" htmlFor="warrantyenddate">
        Warranty End Date
      </label>
      <input name="warrantyenddate" value={warrantyenddate} onChange={(e) => setwarrantyenddate(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="warrantyenddate" type="date"/>
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
  <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Asset</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteAsset} className="btn btn-error">Delete Asset</button>
  </div>  
</div>

  )
}

export default EditAsset
