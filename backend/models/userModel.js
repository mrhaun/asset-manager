const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Please enter an email'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Please enter a password'],
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)