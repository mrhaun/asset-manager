import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/status/statusSlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';
import StatusItem from '../components/StatusItem.jsx';

function Status() {
  const {statuses, isLoading, isSuccess, isError, message} = useSelector((state) => state.status) 
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
          <th className=" z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
            <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">Status</div>
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">

      {statuses.map(status => (
        <StatusItem key={status._id} status={status} />
      ))}   
      </tbody>
    </table>
    </div>
  </div>  
  <div className="relative py-6">
    <Link to={'/createstatus'} className='btn btn-primary'>
          Add Status</Link>
  </div>
</div>

  ) 
}
export default Status
