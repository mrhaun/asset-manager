import {Link} from 'react-router-dom'

function EmployeeItem({employee}) {

  return (
    <>
   
        <tr>
            <td translate="no">
                <Link to={`/employee/${employee._id}`} >{employee.firstname +' '+ employee.lastname}</Link>
            </td>
        </tr>

    </>
  )
}

export default EmployeeItem
