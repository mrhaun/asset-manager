const asyncHandler = require('express-async-handler')



const Asset = require('../models/assetModel')
const Event = require('../models/eventModel')
const Categories = require('../models/categoriesModel')
const Brands = require('../models/brandModel')
const Departments = require('../models/departmentModel')
const Employee = require('../models/employeeModel')
const Locations = require('../models/locationModel')
const Sites = require('../models/siteModel')


const createAsset = asyncHandler (async (req, res) => {
    const {assettag} = req.body

    if (!assettag) {
        res.status(400)
        throw new Error('missing asset tag')
    }
    const assetTagExists = await Asset.findOne({assettag})

    if(assetTagExists) {
        res.status(400)
        throw new Error('Asset tag already exists')
    }


    const asset = await Asset.create(req.body)

    if (asset){
        res.status(201).json({
            asset
        })
    } else {
        res.status(400)
        throw new Error('Invalid asset data')
    }

})
const updateAsset = asyncHandler (async (req, res) => {
    const {assettag} = req.body

    if (!assettag) { 
        res.status(400)
        throw new Error('missing asset tag')
    }
    const currentAssetTag = await Asset.findById(req.params.id)

    if(currentAssetTag.assettag != assettag ) {
        const assetTagExists = await Asset.findOne({assettag})

        if(assetTagExists) {
            res.status(400)
            throw new Error('Asset tag already exists')
        }
    } else {
        const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body)

        if (updatedAsset){
            res.status(201).json(updatedAsset)
        } else {
            res.status(400)
            throw new Error('Invalid asset data')
        }

    }
})
const getAsset = asyncHandler (async (req, res) => {

    const asset = await Asset.findById(req.params.id)
    
    if (!asset){
        res.status(404)
        throw new Error('asset not found')
    }

    const categoryId = asset.category
    const brandId = asset.brand
    const siteId = asset.site
    const departmentId = asset.department
    const locationId = asset.location

    const category = await Categories.findById(categoryId)
 
    if(category){
        asset.category = category.name
    } else {
        res.status(404)
        throw new Error('category not found')
    }

    const brand = await Brands.findById(brandId)
 
    if(brand){
        asset.brand = brand.name
    } else {
        res.status(404)
        throw new Error('brand not found')
    }

    const site = await Sites.findById(siteId)
 
    if(site){
        asset.site = site.name
    } else {
        res.status(404)
        throw new Error('site not found')
    }

    const department = await Departments.findById(departmentId)
 
    if(department){
        asset.department = department.name
    } else {
        res.status(404)
        throw new Error('department not found')
    }
    
    const location = await Locations.findById(locationId)
 
    if(location){
        asset.location = location.name
    } else {
        res.status(404)
        throw new Error('location not found')
    }
    

    
    

    res.status(200).json( asset )
})
const deleteAsset = asyncHandler (async (req, res) => {

    const asset = await Asset.findById(req.params.id)

    if (!asset){
        res.status(404)
        throw new Error('asset not found')
    }

    await asset.remove()

    res.status(200).json({ success: true })
})
const searchAsset = asyncHandler (async (req, res) => {
    if (req.body){
        console.log(req.body)
        const assets = await Asset.find(req.body)
        if (!assets){
            res.status(404)
            throw new Error('asset not found')
        }
        res.status(200).json( assets )
    } else {
        //const assets = await Categories.find({})
        console.log(assets)
        if (!assets){
            res.status(404)
            throw new Error('asset not found')
        } else {
            res.status(200).json( assets )
        }        

    }

})
const updateStatus = asyncHandler (async (req, res) => {
    const {status,employeename,site,department,location} = req.body
    const time = Date.now()
    const assetId = req.params.id
    const assetData ={
        assetId,
        status,
        employeename,
        site,
        department,
        location,
        timestamp: time                       
      }

    const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body)

    if (updatedAsset){
        res.status(201).json(updatedAsset)
        const event = await Event.create(assetData)

        if (event){
            res.status(201).json({
                event
            })
        } else {
            res.status(400)
            throw new Error('Invalid event data')
        }
    } else {
        res.status(400)
        throw new Error('Invalid asset data')
    }

})

module.exports = {createAsset, searchAsset, getAsset, updateAsset, updateStatus, deleteAsset}