const express = require('express')
const siteController = require('../app/controllers/siteCtrl')

const router = express.Router()

router.post('/value', siteController.value)
router.get('/search', siteController.search)
router.get('/', siteController.home)



module.exports = router