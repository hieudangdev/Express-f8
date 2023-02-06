const express = require('express')
const infoController = require('../app/controllers/InfoController')

const router = express.Router()

router.use('/:slug', infoController.show)
router.use('/', infoController.index)



module.exports = router