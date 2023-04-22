const mongoose = require('mongoose')

const sitesSchema = mongoose.Schema({

    name: {
        type: String,      
    }    
})

module.exports = mongoose.model('Sites', sitesSchema)

