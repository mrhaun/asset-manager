import {Link} from 'react-router-dom'

function SiteItem({site}) {

  return (
    <>
   
        <tr>
            <td>
                <Link to={`/updateSite/${site._id}`} >{site.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default SiteItem
