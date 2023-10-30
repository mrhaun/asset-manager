import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {reset, getEvents} from '../features/events/eventsSlice'
import { useParams } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa"
import Spinner from '../components/Spinner';  
import EventItem from '../components/EventItem'

function EventHistory() {
  const {events, isLoading, isSuccess} = useSelector((state) => state.event) 
  const dispatch = useDispatch()
  const {assetId} = useParams()

  useEffect(() => {
    dispatch(getEvents(assetId))    
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
<Link to={`/assetdetails/${assetId}`} className='btn btn-reverse btn-back'>
      <FaArrowCircleLeft />Back
  </Link>
<table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Status</th> 
        <th>Employee Name</th> 
        <th>Site</th> 
        <th>Department</th>
        <th>Location</th>
        <th>Time</th>
      </tr>
    </thead> 
    {events.map(event => (
      <EventItem key={event._id} event={event} />
    ))} 
</table>  
</div>

  ) 
}
export default EventHistory
