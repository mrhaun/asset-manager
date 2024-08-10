import {Link} from 'react-router-dom'

function DepartmentItem({department}) {

  return (
    <>
   
        <tr>
            <td translate="no">
                <Link to={`/updatedepartment/${department._id}`} >{department.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default DepartmentItem
