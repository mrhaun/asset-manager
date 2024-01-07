import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/locations/locationSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import LocationItem from '../components/LocationItem.jsx';

function Locations() {
  const {locations, isLoading, isSuccess, isError, message} = useSelector((state) => state.location) 
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
            Locations
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">

      {locations.map(location => (
        <LocationItem key={location._id} location={location} />
      ))}   
      </tbody>
    </table>
    </div>
  </div>  
  <div className="relative py-6">
    <Link to={'/createlocation'} className='btn btn-primary'>
          Add Location</Link>
  </div>
</div>

  ) 
}
export default Locations
