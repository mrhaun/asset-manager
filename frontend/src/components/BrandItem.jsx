import {Link} from 'react-router-dom'

function BrandItem({brand}) {

  return (
    <>
   
        <tr>
            <td>
                <Link to={`/updatebrand/${brand._id}`} >{brand.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default BrandItem
