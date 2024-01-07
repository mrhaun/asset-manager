import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/brands/brandSlice'

function BrandOption() {
  const {brands, isSuccess, isError, message} = useSelector((state) => state.brand) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    if(isError){
      console.log(message)
    }
    return () => {

      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError, message])



    return (
      <>
     
     {brands.map(brand => (
       <option value={brand._id} key={brand._id}>{brand.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default BrandOption