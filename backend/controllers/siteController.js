const asyncHandler = require('express-async-handler')



const Sites = require('../models/siteModel')


const addSite = asyncHandler (async (req, res) => {
    
    const {name} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('missing site')
    }
    const siteExists = await Sites.findOne({name})

    if(siteExists) {
        res.status(400)
        throw new Error('site already exists')
    }


    const newSite = await Sites.create(req.body)

    if (newSite){
        res.status(201).json({
            newSite
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})
const getSites = asyncHandler (async (req, res) => {
    const sitesList = await Sites.find({})

    if (!sitesList){
        res.status(404)
        throw new Error('site not found')
    } else {
        
        res.status(200).json( sitesList )
    }        
})
const getSite = asyncHandler (async (req, res) => {
    if (req.params.id){
        const site = await Sites.findById(req.params.id)

        if (!site){
            res.status(404)
            throw new Error('site not found')
        }
    
        res.status(200).json( site )
    }
})
const updateSite = asyncHandler (async (req, res) => {
    const {name} = req.body

    if (!name) {
        res.status(400)
        throw new Error('missing site')
    }
    const siteExists = await Sites.findOne({name})

    if(siteExists) {
        res.status(400)
        throw new Error('site already exists')
    }
    const updatedSite = await Sites.findByIdAndUpdate(req.params.id, req.body)

    if (updatedSite){
        res.status(201).json(updatedSite)
    } else {
        res.status(400)
        throw new Error('invalid data')
    }

})   
const deleteSite = asyncHandler (async (req, res) => {

    const site = await Sites.findById(req.params.id)

    if (!site){
        res.status(404)
        throw new Error('Site not found')
    }

    await site.remove()

    res.status(200).json({ success: true })
}) 

module.exports = {addSite, getSites, getSite, updateSite, deleteSite}