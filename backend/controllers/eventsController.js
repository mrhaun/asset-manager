const asyncHandler = require('express-async-handler')



const Events = require('../models/eventModel')
const Departments = require('../models/departmentModel')
const Employee = require('../models/employeeModel')
const Locations = require('../models/locationModel')
const Sites = require('../models/siteModel')

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
    if (req.params.id){
        const eventID =req.params.id
        const eventsList = await Events.find({eventID})

        if (!eventsList){
            res.status(404)
            throw new Error('events not found')
        }
        for (const event of eventsList) {

            const siteId = event.site

            const site = await Sites.findById(siteId)

            if(site){
                event.site = site.name
            } else {
                res.status(404)
                throw new Error('site not found')
            }

            const departmentId = event.department

            const department = await Departments.findById(departmentId)
 
            if(department){
                event.department = department.name
            } else {
                res.status(404)
                throw new Error('department not found')
            }

            const locationId = event.location

            const location = await Locations.findById(locationId)
         
            if(location){
                event.location = location.name
            } else {
                res.status(404)
                throw new Error('location not found')
            }

            const employeeId = event.employeename

            const employee = await Employee.findById(employeeId)
         
            if(employee){
                event.employeename = employee.firstname+' '+employee.lastname
            } else {
                res.status(404)
                throw new Error('employee not found')
            }
        }

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