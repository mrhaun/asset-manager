import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function AddAsset() {






  return (

<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
<form onSubmit={e => {
      e.preventDefault();  
  }}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label" for="asset-tag">
        Asset Tag
      </label>
      <input className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="asset-tag" type="text" />
      <p className="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label"  for="brand">
        Brand
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="brand">
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
      <label className="label" for="model">
        Model
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="model" type="text"/>
    </div>         
    <div className="md:w-1/2 px-3">
      <label className="label" for="description">
        Description
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="description" type="text"/>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">    
    <div className="md:w-1/2 px-3">
      <label className="label" for="serial-number">
      Serial Number
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>     
    <div className="md:w-1/2 px-3">
      <label className="label" for="purchase-date">
        Purchase Date
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="purchase-date" type="date"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="label" for="cost">
      Cost
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>   
    <div className="md:w-1/2 px-3">
      <label className="label" for="estimated-value">
      Estimated Value
      </label>
      <input className="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>   
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3">
      <label className="label"  for="site">
        Site
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
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
      <label className="label"  for="department">
        Department
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
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
      <label className="label"  for="location">
        Location
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="Location">
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
      <button className="btn btn-primary">Create</button>
    </div>
    </div>    
  </form>
</div>


  )
}

export default AddAsset
