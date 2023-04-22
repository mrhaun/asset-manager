const asyncHandler = require('express-async-handler')



const Categories = require('../models/categoriesModel')


const addCategory = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing category')
    }
    const categoryExists = await Categories.findOne({name})

    if(categoryExists) {
        res.status(400)
        throw new Error('Category already exists')
    }


    const category = await Categories.create(req.body)

    if (category){
        res.status(201).json({
            category
        })
    } else {
        res.status(400)
        throw new Error('Invalid category data')
    }

})
const getCategories = asyncHandler (async (req, res) => {
    const categories = await Categories.find({})

    if (!categories){
        res.status(404)
        throw new Error('category not found')
    } else {
        
        res.status(200).json( categories )
    }        
})
const getCategory = asyncHandler (async (req, res) => {
    if (req.params.id){
        const category = await Categories.findById(req.params.id)

        if (!category){
            res.status(404)
            throw new Error('category not found')
        }
    
        res.status(200).json( category )
    }
})
const updateCategory = asyncHandler (async (req, res) => {
    const {name} = req.body


    if (!name) {
        res.status(400)
        throw new Error('missing category')
    }
    const categoryExists = await Categories.findOne({name})

    if(categoryExists) {
        res.status(400)
        throw new Error('Category already exists')
    }
    const updatedCategory = await Categories.findByIdAndUpdate(req.params.id, req.body)

    if (updatedCategory){
        res.status(201).json(updatedCategory)
    } else {
        res.status(400)
        throw new Error('Invalid asset data')
    }

})   
const deleteCategory = asyncHandler (async (req, res) => {

    const category = await Categories.findById(req.params.id)

    if (!category){
        res.status(404)
        throw new Error('asset not found')
    }

    await category.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addCategory, getCategories, getCategory, updateCategory, deleteCategory}