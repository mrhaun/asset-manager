import {Link} from 'react-router-dom'

function CategoryItem({category}) {

  return (
    <>
   
        <tr>
            <td>
                <Link to={`/updatecategory/${category._id}`} >{category.name}</Link>
            </td>
        </tr>

    </>
  )
}

export default CategoryItem
