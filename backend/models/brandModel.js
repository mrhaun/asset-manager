const mongoose = require('mongoose')

const brandsSchema = mongoose.Schema({

    name: {
        type: String,      
    }    
})

module.exports = mongoose.model('Brands', brandsSchema)

