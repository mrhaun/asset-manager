import {Link} from 'react-router-dom'

function LocationItem({location}) {

  return (
    <>
   
        <tr>
            <td>
                <Link to={`/updatelocation/${location._id}`} >{location.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default LocationItem
