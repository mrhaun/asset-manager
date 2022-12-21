const express = require('express')
const router = express.Router()
const { createAsset, searchAsset, getAsset, updateAsset, deleteAsset } = require('../controllers/assetController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(searchAsset).post(protect, createAsset)  

router.route('/:id').get(protect, getAsset).put(protect, updateAsset).delete(protect, deleteAsset)  


module.exports = router