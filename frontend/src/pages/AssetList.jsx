import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import AssetItem from '../components/AssetItem'
import CategoryOption from '../components/CategoryOption';
import BrandOption from '../components/BrandOption';
import SiteOption from '../components/SiteOption';
import DepartmentOption from '../components/DepartmentOption';
import LocationOption from '../components/LocationOption';

function AssetList() {
  const [searchTerm, setSearchTerm] = useState('') 
  const [category, setCategory] = useState('Any')
  const [brand, setBrand] = useState('') 
  const [site, setSite] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')

  const {assets, isLoading, isSuccess} = useSelector((state) => state.asset) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  const onSubmit = (e) => {
    e.preventDefault()

    const searchData ={
      search,
      category,
      brand,
      site,
      department,
      location 
    }

    dispatch(search({searchData}))

  }
  if (isLoading) {
    return <Spinner />
  } 

return (
<>
<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">  
<form onSubmit={onSubmit}>
  <div className="form-control mt-6">
    <div className="relative">
      <BackButton url='/' />
    </div>
  </div>    


  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label" htmlFor="search">
        Search
      </label>
      <input name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="assettag" type="text" />
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
        <button className="btn btn-primary">Search</button>
      </div>
    </div>    
  </form>
</div>





<div className="overflow-x-auto">  
<table className="table table-compact w-full">
    <thead>
      <tr>
        <th>asset tag</th> 
        <th>description</th> 
        <th>brand</th> 
        <th>model</th>
        <th>details</th> 
      </tr>
    </thead> 
    {assets.map(asset => (
      <AssetItem key={asset._id} asset={asset} />
    ))} 
</table>  
</div>
</>
  ) 
}
export default AssetList
