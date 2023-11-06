
function EventItem({event}) {
  return (
    <>
   
    <tbody>
      <tr>
        <td>{event.status}</td> 
        <td>{event.employeename}</td> 
        <td>{event.site}</td> 
        <td>{event.department}</td>
        <td>{event.location}</td>
        <td>{event.timestamp ? new Date(parseInt(event.timestamp)).toLocaleString("en-US", {
          dateStyle: 'short', timeStyle: 'medium'
          }) : ''}
        </td>
      </tr>
    </tbody>

    </>
  ) 
}

export default EventItem
