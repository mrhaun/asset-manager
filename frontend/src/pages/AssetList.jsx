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
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('') 
  const [site, setSite] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')
  const [assetsPerPage, setAssetsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)  

  
  const {assets, isLoading, isSuccess} = useSelector((state) => state.asset) 
  const dispatch = useDispatch()
  useEffect(() => {

    
    return () => {
      dispatch(search())
      if(isSuccess) {
        dispatch(reset())
      }
    }    
  }, [dispatch, isSuccess])

  const onSubmit = (e) => {
    e.preventDefault() 

    const searchData ={
      searchTerm,
      category: e.target.category.value,
      brand: e.target.brand.value,
      site: e.target.site.value,
      department: e.target.department.value,
      location: e.target.location.value
    }
    console.log(searchData)
    dispatch(search(searchData))
    setTotalPages(Math.ceil(assets.length / assetsPerPage))
  }
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
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


  <div className="-mx-3 md:flex mb-12">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
      <label className="label" htmlFor="search">
        Search
      </label>
      <input name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="assettag" type="text" />    
    </div>
  </div>
    <div className="-mx-3 md:flex mb-6">    
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="category">
        Category
      </label>
      <div className="relative">
        <select  disabled value={category} name="category" onChange={(e) => setCategory(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="category">
          <CategoryOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="brand">
        Brand
      </label>
      <div className="relative">
        <select  disabled name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="brand">
          <BrandOption/>
        </select>
      </div>
    </div>

    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="site">
        Site
      </label>
      <div className="relative">
        <select disabled name="site" value={site} onChange={(e) => setSite(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
          <SiteOption/>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  htmlFor="department">
        Department
      </label>
      <div className="relative">
        <select disabled name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
          <DepartmentOption/>
        </select>
      </div>
    </div>
      <div className="md:w-1/2 px-3">
        <label className="label"  htmlFor="location">
          Location
        </label>
        <div className="relative">
          <select disabled name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="location">
            <LocationOption/>
          </select>
        </div>
      </div>
      <div className="md:w-1/2 px-3">
        <label className="label"  htmlFor="assetsperpage">
          Assets Per Page
        </label>
        <div className="relative">
          <select name="assetsperpage" value={assetsPerPage} onChange={(e) => setAssetsPerPage(e.target.value)} className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="assetsperpage">
            <option value='5' >20</option>
            <option value='50' >50</option>
            <option value='100' >100</option>
            <option value='200' >200</option>
            <option value='500' >500</option>                                                
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
    {assets
      .slice((currentPage - 1) * assetsPerPage, currentPage * assetsPerPage)    
      .map(asset => (
        <AssetItem key={asset._id} asset={asset} />
    ))} 
</table>  
<div className="md:w-full px-6">
  <button className="btn btn-primary"
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Previous
    </button>
    <div className="relative">{`Page ${currentPage} of ${totalPages}`}</div>
    <button  className="btn btn-primary"
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
    >
      Next
    </button>
    </div>
</div>
</>
  ) 
}
export default AssetList
