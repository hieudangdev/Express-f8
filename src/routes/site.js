const express = require('express')
const siteController = require('../app/controllers/SiteController')

const router = express.Router()

router.use('/login', siteController.login)
router.use('/value', siteController.value)
router.use('/search', siteController.search)
router.use('/', siteController.home)



module.exports = router