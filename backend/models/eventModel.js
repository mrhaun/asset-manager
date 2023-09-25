const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({

    assetId: {
        type: String,      
    },
    status: {
        type: String,      
    },        
    employeename: {
        type: String,      
    },   
    site: {
        type: String,
    },
    department: {
        type: String,
    },
    location: {
        type: String,
    },    
    timestamp: {
        type: String,      
    }        
})

module.exports = mongoose.model('Event', eventSchema)

