const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({

    name: {
        type: String,      
    }    
})

module.exports = mongoose.model('Categories', categoriesSchema)