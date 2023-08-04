const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({

    status: {
        type: String,      
    },
    timestamp: {
        type: String,      
    }        
})

module.exports = mongoose.model('Status', statusSchema)