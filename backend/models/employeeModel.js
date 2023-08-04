const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({

    firstname: {
        type: String,      
    },
    lastname: {
        type: String,      
    },            
    email: {
        type: String,      
    },
    site: {
        type: String,      
    },
    location: {
        type: String,      
    },
    department: {
        type: String,      
    },                                                                
})

module.exports = mongoose.model('Employee', employeeSchema)


