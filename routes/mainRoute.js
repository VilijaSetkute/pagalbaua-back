const express = require('express')
const router = express.Router()
const {orgList, addOrg, orgLocation} = require('../controllers/organizationController')
const {financeLTList, FinanceOrgLocation} = require('../controllers/financeLTController')
const {itemsLTList, ItemOrgLocation} = require('../controllers/itemsController')
const {workLTList, WorkOrgLocation} = require('../controllers/workLTController')
const {volunteerList, VolunteerOrgLocation} = require('../controllers/volunteerController')
const {kidList, KidsOrgLocation} = require('../controllers/kidController')
const {allPoints} = require('../controllers/pointsController')

// help in UA //
router.get('/orgList', orgList)
router.post('/orgLocation', orgLocation)
router.post('/addOrg', addOrg)

// financial aid in LT //
router.get('/financeLTList', financeLTList)
router.post('/FinanceOrgLocation', FinanceOrgLocation)

// items aid in LT //
router.get('/itemsLTList', itemsLTList)
router.post('/ItemOrgLocation', ItemOrgLocation)

// job ads in LT //
router.get('/workLTList', workLTList)
router.post('/WorkOrgLocation', WorkOrgLocation)

// volunteering in LT //
router.get('/volunteerList', volunteerList)
router.post('/VolunteerOrgLocation', VolunteerOrgLocation)

// kids in LT //
router.get('/kidList', kidList)
router.post('/KidsOrgLocation', KidsOrgLocation)

// pickuppoints in LT //
router.get('/allPoints', allPoints)


module.exports = router