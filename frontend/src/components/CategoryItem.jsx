import {Link} from 'react-router-dom'

function CategoryItem({category}) {

  return (
    <>
   
        <tr>
            <td translate="no" className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">
                <Link to={`/updatecategory/${category._id}`} >{category.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default CategoryItem
