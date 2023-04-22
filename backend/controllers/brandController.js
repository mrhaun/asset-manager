const asyncHandler = require('express-async-handler')



const Brands = require('../models/brandModel')


const addBrand = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing brand')
    }
    const brandExists = await Brands.findOne({name})

    if(brandExists) {
        res.status(400)
        throw new Error('brand already exists')
    }


    const brand = await Brands.create(req.body)

    if (brand){
        res.status(201).json({
            brand
        })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }

})
const getBrands = asyncHandler (async (req, res) => {
    const brands = await Brands.find({})

    if (!brands){
        res.status(404)
        throw new Error('brands not found')
    } else {
        
        res.status(200).json( brands )
    }        
})
const getBrand = asyncHandler (async (req, res) => {
    if (req.params.id){
        const brand = await Brands.findById(req.params.id)

        if (!brand){
            res.status(404)
            throw new Error('brand not found')
        }
    
        res.status(200).json( brand )
    }
})
const updateBrand = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing brand')
    }
    const brandExists = await Brands.findOne({name})

    if(brandExists) {
        res.status(400)
        throw new Error('brand already exists')
    }
    const updatedBrand = await Brands.findByIdAndUpdate(req.params.id, req.body)

    if (updatedBrand){
        res.status(201).json(updatedBrand)
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }

})   
const deleteBrand = asyncHandler (async (req, res) => {

    const brand = await Brands.findById(req.params.id)

    if (!brand){
        res.status(404)
        throw new Error('brand not found')
    }

    await brand.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addBrand, getBrands, getBrand, updateBrand, deleteBrand}