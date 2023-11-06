import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getAsset} from '../features/assets/assetSlice'
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function AssetDetails() {
  const {asset, isLoading, isSuccess, isError, message} = useSelector((state) => state.asset)

  const warrantystartdate = (asset.warrantystartdate) ? new Date(asset.warrantystartdate) : ''
  const warrantyenddate = (asset.warrantyenddate) ? new Date(asset.warrantyenddate) : ''
  const purchasedate = (asset.purchasedate) ? new Date(asset.purchasedate) : ''


  

  
  const dispatch = useDispatch()
  
  const {assetId} = useParams()
  
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    dispatch(getAsset(assetId))      
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  if (isLoading) {
    return <Spinner />
  }

  

  return (
<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
<div className="-mx-3 md:flex mb-6">
  <div className="md:w-1/2 px-2">
    <div className="card w-96 bg-base-100 shadow-xl">
    <BackButton url='/assetlist' />
    <div className="card-body">
      <h2 className="card-title">{asset.description}</h2>
      <h1 className="card-title">Asset Tag</h1>
      <p>{asset.assettag}</p>
      <h1 className="card-title">Brand</h1>
      <p>{asset.brand}</p>
      <h1 className="card-title">Model</h1>
      <p>{asset.model}</p>
      <h1 className="card-title">Category</h1>
      <p>{asset.category}</p>
      <h1 className="card-title">Serial Number</h1>
      <p>{asset.serialnumber}</p>
      <h1 className="card-title">Purchase Date</h1>
      <p>{purchasedate ? purchasedate.toLocaleDateString('en-US') : '' }</p>
      <h1 className="card-title">Cost</h1>
      <p>{asset.cost}</p>
      <h1 className="card-title">Estimated Value</h1>      
      <p>{asset.estimatedvalue}</p>
      <h1 className="card-title">Warranty Start Date</h1>      
      <p>{warrantystartdate ? warrantystartdate.toLocaleDateString('en-US') : ''}</p>
      <h1 className="card-title">Warranty End Date</h1>
      <p>{warrantyenddate ? warrantyenddate.toLocaleDateString('en-US') : ''}</p>
      <h1 className="card-title">Site</h1>              
      <p>{asset.site}</p>
      <h1 className="card-title">Department</h1>      
      <p>{asset.department}</p>
      <h1 className="card-title">Location</h1>      
      <p>{asset.location}</p>
    </div>
    <Link to={`/editasset/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
        edit asset</Link>

    </div>
  </div> 
  <div className="md:w-1/2 px-3">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
      <h2 className="card-title">Status:</h2>
      <p>{asset.status == 'Check Out' ? 'Checked Out To: ' : ''}</p>
      <p>{asset.status == 'Check in' ? 'Checked in To: ' : ''}</p>
      <p>{asset.status == 'Dispose' ? 'Disposed' : ''}</p>
      <p>{asset.status == 'Available' ? 'Available' : ''}</p>            
      <p>{asset.employeename}</p>      
      <Link to={`/updateassetstatus/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
        update status</Link>
   
      <Link to={`/eventhistory/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
        event history</Link>



      </div>
    </div>
    </div>  
  </div>
    
</div>
  )
}

export default AssetDetails
