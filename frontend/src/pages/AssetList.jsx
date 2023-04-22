import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import AssetItem from '../components/AssetItem'

function AssetList() {
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

  if (isLoading) {
    return <Spinner />
  } 

return (

<div className="overflow-x-auto">
<BackButton url='/' />
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

  ) 
}
export default AssetList
