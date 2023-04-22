const asyncHandler = require('express-async-handler')



const Departments = require('../models/departmentModel')


const addDepartment = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing department')
    }
    const departmentExists = await Departments.findOne({name})

    if(departmentExists) {
        res.status(400)
        throw new Error('department already exists')
    }


    const newDepartment = await Departments.create(req.body)

    if (newDepartment){
        res.status(201).json({
            newDepartment
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getDepartments = asyncHandler (async (req, res) => {
    const departmentsList = await Departments.find({})

    if (!departmentsList){
        res.status(404)
        throw new Error('department not found')
    } else {
        
        res.status(200).json( departmentsList )
    }        
})
const getDepartment = asyncHandler (async (req, res) => {
    if (req.params.id){
        const department = await Departments.findById(req.params.id)

        if (!department){
            res.status(404)
            throw new Error('department not found')
        }
    
        res.status(200).json( department )
    }
})
const updateDepartment = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing department')
    }
    const departmentExists = await Departments.findOne({name})

    if(departmentExists) {
        res.status(400)
        throw new Error('department already exists')
    }
    const updatedDepartment = await Departments.findByIdAndUpdate(req.params.id, req.body)

    if (updatedDepartment){
        res.status(201).json(updatedDepartment)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteDepartment = asyncHandler (async (req, res) => {

    const department = await Departments.findById(req.params.id)

    if (!department){
        res.status(404)
        throw new Error('department not found')
    }

    await department.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment}