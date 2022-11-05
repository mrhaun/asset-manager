import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddAsset() {






  return (

<div class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
<form onSubmit={e => {
      e.preventDefault();  
  }}>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label class="label" for="asset-tag">
        Asset Tag
      </label>
      <input class="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="asset-tag" type="text" />
      <p class="text-red text-xs italic">Please fill out this field.</p>    
    </div>
    <div class="md:w-1/2 px-3">
      <label class="label"  for="brand">
        Brand
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="brand">
          <option>Asus</option>
          <option>MSI</option>
          <option>hp</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="label" for="model">
        Model
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="model" type="text"/>
    </div>         
    <div class="md:w-1/2 px-3">
      <label class="label" for="description">
        Description
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="description" type="text"/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">    
    <div class="md:w-1/2 px-3">
      <label class="label" for="serial-number">
      Serial Number
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>     
    <div class="md:w-1/2 px-3">
      <label class="label" for="purchase-date">
        Purchase Date
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="purchase-date" type="date"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="label" for="cost">
      Cost
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>   
    <div class="md:w-1/2 px-3">
      <label class="label" for="estimated-value">
      Estimated Value
      </label>
      <input class="appearance-none block w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4" id="serial-number" type="text"/>
    </div>   
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3">
      <label class="label"  for="site">
        Site
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="site">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="label"  for="department">
        Department
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="department">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="label"  for="location">
        Location
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-base-content border border-neutral text-base-200 py-3 px-4 pr-8 rounded" id="Location">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="form-control mt-6">
      <div class="relative">
      <button class="btn btn-primary">Create</button>
    </div>
    </div>    
  </form>
</div>


  )
}

export default AddAsset
