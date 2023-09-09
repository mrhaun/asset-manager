const asyncHandler = require('express-async-handler')



const Events = require('../models/eventModel')


const addEvent = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing event name')
    }
    const eventExists = await Events.findOne({name})

    if(eventExists) {
        res.status(400)
        throw new Error('event already exists')
    }


    const newEvent = await Events.create(req.body)

    if (newEvent){
        res.status(201).json({
            newEvent
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getEvents = asyncHandler (async (req, res) => {
    const eventsList = await Events.find({})

    if (!eventsList){
        res.status(404)
        throw new Error('events not found')
    } else {
        
        res.status(200).json( eventsList )
    }        
})
const getEvent = asyncHandler (async (req, res) => {
    if (req.params.id){
        const event = await Events.findById(req.params.id)

        if (!event){
            res.status(404)
            throw new Error('event not found')
        }
    
        res.status(200).json( event )
    }
})
const updateEvent = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing event')
    }
    const eventExists = await Events.findOne({name})

    if(eventExists) {
        res.status(400)
        throw new Error('events already exists')
    }
    const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body)

    if (updatedEvent){
        res.status(201).json(updatedEvent)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteEvent = asyncHandler (async (req, res) => {

    const event = await Events.findById(req.params.id)

    if (!event){
        res.status(404)
        throw new Error('event not found')
    }

    await event.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addEvent, getEvent, getEvents, updateEvent, deleteEvent}