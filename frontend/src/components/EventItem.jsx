
function EventItem({event}) {
    const time = (event.timestamp) ? new Date(event.timestamp) : ''    
  return (
    <>
   
    <tbody>
      <tr>
        <td>{event.status}</td> 
        <td>{event.employeename}</td> 
        <td>{event.site}</td> 
        <td>{event.department}</td>
        <td>{event.location}</td>
        <td>{time ? time.toLocaleDateString('en-US') : ''}</td>
      </tr>
    </tbody>

    </>
  ) 
}

export default EventItem
