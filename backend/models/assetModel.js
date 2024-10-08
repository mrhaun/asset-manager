const mongoose = require('mongoose')

const assetSchema = mongoose.Schema({
    assettag: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,      
    },    
    brand: {
        type: String,      
    },
    model: {
        type: String,
    },
    description: {
        type: String,
    },
    serialnumber: {
        type: String,
    },    
    purchasedate: {
        type: String,
    },
    cost: {
        type: String,
    },
    value: {
        type: String,
    },
    warrantystartdate: {
        type: String,
    },
    warrantyenddate: {
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
    status: {
        type: String,
    },
    employeename: {
        type: String,      
    }    
})

module.exports = mongoose.model('Asset', assetSchema)