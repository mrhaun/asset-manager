const asyncHandler = require('express-async-handler')



const Locations = require('../models/locationModel')


const addLocation = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing location')
    }
    const locationExists = await Locations.findOne({name})

    if(locationExists) {
        res.status(400)
        throw new Error('location already exists')
    }


    const newLocation = await Locations.create(req.body)

    if (newLocation){
        res.status(201).json({
            newLocation
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getLocations = asyncHandler (async (req, res) => {
    const locationsList = await Locations.find({})

    if (!locationsList){
        res.status(404)
        throw new Error('location not found')
    } else {
        
        res.status(200).json( locationsList )
    }        
})
const getLocation = asyncHandler (async (req, res) => {
    if (req.params.id){
        const location = await Locations.findById(req.params.id)

        if (!location){
            res.status(404)
            throw new Error('location not found')
        }
    
        res.status(200).json( location )
    }
})
const updateLocation = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing location')
    }
    const locationExists = await Locations.findOne({name})

    if(locationExists) {
        res.status(400)
        throw new Error('location already exists')
    }
    const updatedLocation = await Locations.findByIdAndUpdate(req.params.id, req.body)

    if (updatedLocation){
        res.status(201).json(updatedLocation)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteLocation = asyncHandler (async (req, res) => {

    const location = await Locations.findById(req.params.id)

    if (!location){
        res.status(404)
        throw new Error('Location not found')
    }

    await location.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addLocation, getLocations, getLocation, updateLocation, deleteLocation}