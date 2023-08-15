import {Link} from 'react-router-dom'

function EmployeeItem({employee}) {

  return (
    <>
   
        <tr>
            <td translate="no" className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">
                <Link to={`/updateemployee/${employee._id}`} >{employee.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default EmployeeItem
