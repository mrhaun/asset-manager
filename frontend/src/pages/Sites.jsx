import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/sites/siteSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import SiteItem from '../components/SiteItem.jsx';

function Sites() {
  const {sites, isLoading, isSuccess, isError, message} = useSelector((state) => state.site) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    if(isError){
      toast.error(message)
    }
    return () => {

      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError, message])





  if (isLoading) {
    return <Spinner />
  } 

return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/settings' />
  </div>
  <div className="card w-96 max-h-96 bg-base-100 shadow-xl">
    <div className="card-body overflow-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th>
            Site
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">

      {sites.map(site => (
        <SiteItem key={site._id} site={site} />
      ))}   
      </tbody>
    </table>
    </div>
  </div>  
  <div className="relative py-6">
    <Link to={'/createsite'} className='btn btn-primary'>
          Add Site</Link>
  </div>
</div>

  ) 
}
export default Sites
