const asyncHandler = require('express-async-handler')



const Events = require('../models/eventsModel')


const addEvents = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing events')
    }
    const eventsExists = await Events.findOne({name})

    if(eventsExists) {
        res.status(400)
        throw new Error('events already exists')
    }


    const newevents = await Events.create(req.body)

    if (newevents){
        res.status(201).json({
            newevents
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getEvents = asyncHandler (async (req, res) => {
    const EventsList = await Events.find({})

    if (!EventsList){
        res.status(404)
        throw new Error('events not found')
    } else {
        
        res.status(200).json( EventsList )
    }        
})
const getevents = asyncHandler (async (req, res) => {
    if (req.params.id){
        const events = await Events.findById(req.params.id)

        if (!events){
            res.status(404)
            throw new Error('events not found')
        }
    
        res.status(200).json( events )
    }
})
const updateevents = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing events')
    }
    const eventsExists = await Events.findOne({name})

    if(eventsExists) {
        res.status(400)
        throw new Error('events already exists')
    }
    const updatedevents = await Events.findByIdAndUpdate(req.params.id, req.body)

    if (updatedevents){
        res.status(201).json(updatedevents)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteevents = asyncHandler (async (req, res) => {

    const events = await Events.findById(req.params.id)

    if (!events){
        res.status(404)
        throw new Error('events not found')
    }

    await events.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addevents, getEvents, getevents, updateevents, deleteevents}