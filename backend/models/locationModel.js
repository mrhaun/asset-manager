const mongoose = require('mongoose')

const locationsSchema = mongoose.Schema({

    name: {
        type: String,      
    }    
})

module.exports = mongoose.model('Locations', locationsSchema)

