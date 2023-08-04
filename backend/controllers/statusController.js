const asyncHandler = require('express-async-handler')



const Status = require('../models/statusModel')


const addStatus = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing status')
    }
    const statusExists = await Status.findOne({name})

    if(statusExists) {
        res.status(400)
        throw new Error('status already exists')
    }


    const newStatus = await Status.create(req.body)

    if (newStatus){
        res.status(201).json({
            newStatus
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getStatuses = asyncHandler (async (req, res) => {
    const StatusList = await Status.find({})

    if (!StatusList){
        res.status(404)
        throw new Error('Status not found')
    } else {
        
        res.status(200).json( statusList )
    }        
})
const getStatus = asyncHandler (async (req, res) => {
    if (req.params.id){
        const status = await Status.findById(req.params.id)

        if (!status){
            res.status(404)
            throw new Error('Status not found')
        }
    
        res.status(200).json( status )
    }
})
const updateStatus = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing status')
    }
    const statusExists = await Status.findOne({name})

    if(statusExists) {
        res.status(400)
        throw new Error('Status already exists')
    }
    const updatedStatus = await Status.findByIdAndUpdate(req.params.id, req.body)

    if (updatedStatus){
        res.status(201).json(updatedStatus)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteStatus = asyncHandler (async (req, res) => {

    const status = await Status.findById(req.params.id)

    if (!status){
        res.status(404)
        throw new Error('Status not found')
    }

    await Status.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addStatus, getStatus, getStatuses, updateStatus, deleteStatus}