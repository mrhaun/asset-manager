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

    <div className="card w-96 bg-base-100 shadow-xl">
      <BackButton url='/assetlist' />
      <div className="card-body">
        <h2 className="card-title">{asset.description}</h2>
        <p>{asset.assettag}</p>
        <p>{asset.brand}</p>
        <p>{asset.model}</p>
        <p>{asset.category}</p>
        <p>{asset.serialnumber}</p>
        <p>{asset.purchasedate}</p>
        <p>{asset.cost}</p>
        <p>{asset.estimatedvalue}</p>
        <p>{asset.site}</p>
        <p>{asset.department}</p>
        <p>{asset.location}</p>
      </div>
      <Link to={`/assetdetails/${asset._id}`} className='btn btn-ghost btn-sm rounded-btn'>
          edit asset</Link>


    </div>

  )
}

export default AssetDetails
