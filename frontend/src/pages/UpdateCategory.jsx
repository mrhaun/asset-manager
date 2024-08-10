import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {reset, getCategory, updateCategory, deleteCategory} from '../features/categories/categorySlice'
import Spinner from '../components/Spinner';  
import BackButton from '../components/BackButton';


function UpdateCategory() {
    const [updatedCategory, setUpdatedCategory] = useState('')
    const {category, isLoading, isSuccess, updateComplete, isError, message} = useSelector((state) => state.category)

    const dispatch = useDispatch() 
    const navigate = useNavigate()        
    const {categoryId} = useParams()
    
    useEffect(() => {
      if(isError){
        toast.error(message)
      } else {
        dispatch(getCategory(categoryId))  
        setUpdatedCategory(category.name)  
      }  
      return () => {
        if(updateComplete){
          dispatch(reset())
          navigate('/categories')             
        }
        if(isSuccess) {
          dispatch(reset())
        }
      }
      
    }, [dispatch, isSuccess, updateComplete, isError, message, categoryId, category.name])
  
    if (isLoading) {
      return <Spinner />
    }

    
    
    
   const handleUpdateCategory = (e) => {
    e.preventDefault()

    const category ={
      name: updatedCategory
    }

    dispatch(updateCategory({category,categoryId}))
  }
  const handleDeleteCategory = (e) => {
    e.preventDefault()


    dispatch(deleteCategory(categoryId))
    if(isError){
        toast.error(message)
      }
    if (isSuccess){
        dispatch(reset())
        navigate('/categories')    
      }

  }      

  if (isLoading) {
    return <Spinner />
  } 


return (



<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/categories' />
  </div>
  <form onSubmit={handleUpdateCategory}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
        Category
      </label>
      <input autoFocus name="updatedcategory" value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)} className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" id="updatedcategory" type="text" />
    </div>
    </div>
    <div className="form-control mt-6">
      <div className="relative">
      <button className="btn btn-primary">Update Category</button>
    </div>
    </div>    
  </form>
  <div className="relative py-6">
    <button onClick={handleDeleteCategory} className="btn btn-error">Delete Category</button>
  </div>
</div>

  ) 
}
export default UpdateCategory
