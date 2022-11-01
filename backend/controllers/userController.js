const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const registerUser = asyncHandler (async (req, res) => {
    const {email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error('missing email or password')
    }
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        email,
        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})
const loginUser = asyncHandler (async (req, res) => {
    const {email, password } = req.body
    
    const user = await User.findOne({email})    
    
    if (user && (await bcrypt.compare(password, user.password))) {

        res.status(200).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }

})
const getSettings = asyncHandler (async (req, res) => {
    res.status(200).json( req.user )
})
const updateSettings = asyncHandler (async (req, res) => {

})
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

}

module.exports = {registerUser, loginUser, getSettings, updateSettings}