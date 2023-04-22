const mongoose = require('mongoose')

const departmentsSchema = mongoose.Schema({

    name: {
        type: String,      
    }    
})

module.exports = mongoose.model('Departments', departmentsSchema)

