const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getSettings, updateSettings } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/settings', protect, getSettings)
router.post('/settings', protect, updateSettings)


module.exports = router