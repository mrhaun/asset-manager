import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {reset, search} from '../features/categories/categoriesSlice'

function CategoryOption() {
  const {categories, isSuccess, isError, message} = useSelector((state) => state.categories) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())    
    if(isError){
      console.log(message)
    }
    return () => {

      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError, message])



    return (
      <>
     
     {categories.map(category => (
       <option key={category._id}>{category.name}</option>
      ))}  
  
      </>
    )
  }
  
  export default CategoryOption