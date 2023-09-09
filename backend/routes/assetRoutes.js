const express = require('express')
const router = express.Router()
const { createAsset, 
        searchAsset, 
        getAsset, 
        updateAsset,
        updateStatus, 
        deleteAsset,
    
      } = require('../controllers/assetController')
const { 
        getCategory,
        updateCategory,
        deleteCategory,
        getCategories,
        addCategory
    
      } = require('../controllers/categoryController')      
const { 
        getBrand,
        updateBrand,
        deleteBrand,
        getBrands,
        addBrand
    
      } = require('../controllers/brandController') 
const { 
        getSite,
        updateSite,
        deleteSite,
        getSites,
        addSite
    
      } = require('../controllers/siteController') 
const { 
        getDepartment,
        updateDepartment,
        deleteDepartment,
        getDepartments,
        addDepartment
    
      } = require('../controllers/departmentController')
const { 
        getLocation,
        updateLocation,
        deleteLocation,
        getLocations,
        addLocation
    
      } = require('../controllers/locationController')
      const { 
        getEvent,
        updateEvent,
        deleteEvent,
        getEvents,
        addEvent
    
      } = require('../controllers/eventsController')
      const { 
        getEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployees,
        addEmployee
    
      } = require('../controllers/employeeController')                                            

const {protect} = require('../middleware/authMiddleware')

router.route('/search').post(searchAsset)
router.route('/').post(protect, createAsset)  
router.route('/:id').get(protect, getAsset).put(protect, updateAsset).delete(protect, deleteAsset)  

router.route('/categories/:id').get(protect, getCategory).put(protect, updateCategory).delete(protect, deleteCategory)
router.route('/categories').post(protect, addCategory)
router.route('/categories/search').post(protect, getCategories)

router.route('/brands/:id').get(protect, getBrand).put(protect, updateBrand).delete(protect, deleteBrand)
router.route('/brands').post(protect, addBrand)
router.route('/brands/search').post(protect, getBrands)

router.route('/sites/:id').get(protect, getSite).put(protect, updateSite).delete(protect, deleteSite)
router.route('/sites').post(protect, addSite)
router.route('/sites/search').post(protect, getSites)

router.route('/departments/:id').get(protect, getDepartment).put(protect, updateDepartment).delete(protect, deleteDepartment)
router.route('/departments').post(protect, addDepartment)
router.route('/departments/search').post(protect, getDepartments)

router.route('/locations/:id').get(protect, getLocation).put(protect, updateLocation).delete(protect, deleteLocation)
router.route('/locations').post(protect, addLocation)
router.route('/locations/search').post(protect, getLocations)

router.route('/status').post(protect, updateStatus)

router.route('/events/:id').get(protect, getEvents).put(protect, updateEvent).delete(protect, deleteEvent)
router.route('/events').post(protect, addEvent)
router.route('/events/search').post(protect, getEvents)

router.route('/employees/:id').get(protect, getEmployee).put(protect, updateEmployee).delete(protect, deleteEmployee)
router.route('/employees').post(protect, addEmployee)
router.route('/employees/search').post(protect, getEmployees)

module.exports = router