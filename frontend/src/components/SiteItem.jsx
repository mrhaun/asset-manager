import {Link} from 'react-router-dom'

function SiteItem({site}) {

  return (
    <>
   
        <tr>
            <td translate="no" className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">
                <Link to={`/updateSite/${site._id}`} >{site.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default SiteItem
