const asyncHandler = require('express-async-handler')



const Employee = require('../models/employeeModel')


const createEmployee = asyncHandler (async (req, res) => {
    const {email} = req.body

    if (!email) {
        res.status(400)
        throw new Error('missing employee email')
    }
    const employeeEmailExists = await Employee.findOne({email})

    if(employeeEmailExists) {
        res.status(400)
        throw new Error('Employee email already exists')
    }


    const employee = await Employee.create(req.body)

    if (employee){
        res.status(201).json({
            employee
        })
    } else {
        res.status(400)
        throw new Error('Invalid employee data')
    }

})
const updateEmployee = asyncHandler (async (req, res) => {
    const {email} = req.body

    if (!email) { 
        res.status(400)
        throw new Error('missing employee email')
    }
    const currentEmployeeEmail = await Employee.findById(req.params.id)

    if(currentEmployeeEmail.email != email ) {
        const EmployeeEmailExists = await Employee.findOne({email})

        if(EmployeeEmailExists) {
            res.status(400)
            throw new Error('Employee email already exists')
        }
    } else {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)

        if (updatedEmployee){
            res.status(201).json(updatedEmployee)
        } else {
            res.status(400)
            throw new Error('Invalid employee data')
        }

    }
})
const getEmployee = asyncHandler (async (req, res) => {

    const employee = await Employee.findById(req.params.id)

    if (!employee){
        res.status(404)
        throw new Error('Employee not found')
    }

    res.status(200).json( employee )
})
const getEmployees = asyncHandler (async (req, res) => {
    const EmployeesList = await Employee.find({})

    if (!EmployeesList){
        res.status(404)
        throw new Error('events not found')
    } else {
        
        res.status(200).json( EmployeesList )
    }        
})
const deleteEmployee = asyncHandler (async (req, res) => {

    const employee = await Employee.findById(req.params.id)

    if (!employee){
        res.status(404)
        throw new Error('Employee not found')
    }

    await employee.remove()

    res.status(200).json({ success: true })
})


module.exports = {createEmployee, searchEmployee, getEmployee, updateEmployee, deleteEmployee}