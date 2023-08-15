const mongoose = require('mongoose')

const eventsSchema = mongoose.Schema({

    name: {
        type: String,      
    },
    timestamp: {
        type: String,      
    }        
})

module.exports = mongoose.model('Events', eventsSchema)

