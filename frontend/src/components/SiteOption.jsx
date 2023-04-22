import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/sites/siteSlice'

function SiteOption() {
  const {sites, isSuccess, isError, message} = useSelector((state) => state.site) 
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
     
     {sites.map(site => (
       <option key={site._id}>{site.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default SiteOption