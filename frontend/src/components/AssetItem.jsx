import {Link} from 'react-router-dom'

function AssetItem({asset}) {

  return (
    <>
   
    <tbody>
      <tr>
        <td>{asset.assettag}</td> 
        <td>{asset.description}</td> 
        <td>{asset.brand}</td> 
        <td>{asset.model}</td>
        <td><Link to={`/assetdetails/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
          view details</Link></td>         
      </tr>
    </tbody>

    </>
  )
}

export default AssetItem
