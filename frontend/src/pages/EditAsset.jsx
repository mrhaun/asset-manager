import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {create, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';

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
  const [site, setSite] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()    
  const {assets, asset, isError, isSuccess, isLoading, message} = useSelector((state) => state.asset)
 

  useEffect(() => {

    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      dispatch(reset())
      navigate('/assetlist')

    }
    dispatch(reset())
  }, [isError, isSuccess, message, navigate, dispatch])


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
      site,
      department,
      location 
    }

    dispatch(create(assetData))

  }

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <BackButton url='/' />
    <form onSubmit={onSubmit}>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
        <label className="label" htmlfor="assettag">
            Asset Tag
          </label>
          <input name="assettag" value={assettag} onChange={(e) => setAssettag(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="assettag" type="text" />
          <p className="text-red text-xs italic">Please fill out this field.</p>    
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlfor="category">
            Category
          </label>
          <div className="relative">
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="category">
              <option>Monitor</option>
              <option>PC components</option>
              <option>Mobile Phone</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlfor="brand">
            Brand
          </label>
          <div className="relative">
            <select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="brand">
              <option>Asus</option>
              <option>MSI</option>
              <option>hp</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="model">
            Model
          </label>
          <input name="model" value={model} onChange={(e) => setModel(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="model" type="text"/>
        </div>         
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="description">
            Description
          </label>
          <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="description" type="text"/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">    
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="serialnumber">
          Serial Number
          </label>
          <input name="serialnumber" value={serialnumber} onChange={(e) => setSerialnumber(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serialnumber" type="text"/>
        </div>     
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="purchasedate">
            Purchase Date
          </label>
          <input name="purchasedate" value={purchasedate} onChange={(e) => setPurchasedate(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="purchasedate" type="date"/>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="cost">
          Cost
          </label>
          <input name="cost" value={cost} onChange={(e) => setCost(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="cost" type="text"/>
        </div>   
        <div className="md:w-1/2 px-3">
          <label className="label" htmlfor="value">
          Estimated Value
          </label>
          <input name="estimatedvalue" value={estimatedvalue} onChange={(e) => setEstimatedvalue(e.target.value)} className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="value" type="text"/>
        </div>   
      </div>   
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlfor="site">
            Site
          </label>
          <div className="relative">
            <select name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlfor="department">
            Department
          </label>
          <div className="relative">
            <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label"  htmlfor="location">
            Location
          </label>
          <div className="relative">
            <select name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="form-control mt-6">
          <div className="relative">
          <button className="btn btn-primary">Update</button>
        </div>
        </div>    
      </form>
    </div>

  )
}

export default EditAsset
