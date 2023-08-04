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
      <p>{asset.assettag}</p>
      <p>{asset.brand}</p>
      <p>{asset.model}</p>
      <p>{asset.category}</p>
      <p>{asset.serialnumber}</p>
      <p>{purchasedate ? purchasedate.toLocaleDateString('en-US') : '' }</p>
      <p>{asset.cost}</p>
      <p>{asset.estimatedvalue}</p>
      <p>{warrantystartdate ? warrantystartdate.toLocaleDateString('en-US') : ''}</p>
      <p>{warrantyenddate ? warrantyenddate.toLocaleDateString('en-US') : ''}</p>
              
      <p>{asset.site}</p>
      <p>{asset.department}</p>
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
      <p>{asset.assettag}</p>
      <Link to={`/updatestatus/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
        update status</Link>
    
      <h2 className="card-title">Event History:</h2>              
      <p>{asset.site}</p>
      <p>{asset.department}</p>
      <p>{asset.location}</p>
      </div>
    </div>
    </div>
  </div>
    
</div>
  )
}

export default AssetDetails
