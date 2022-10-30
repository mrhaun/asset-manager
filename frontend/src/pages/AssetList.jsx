import {Link} from 'react-router-dom'

function MissionList() {
  return (
    <div className="flex-1 px-2 mx-2">
    <div className="flex justify-center">
        <Link to='/addmission' className='btn btn-ghost btn-sm rounded-btn'>
            Add Mission
        </Link>
    </div>
</div>
  )
}

export default MissionList
