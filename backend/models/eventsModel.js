const mongoose = require('mongoose')

const eventsSchema = mongoose.Schema({

    status: {
        type: String,      
    },
    timestamp: {
        type: String,      
    }        
})

module.exports = mongoose.model('Events', eventsSchema)

