const express = require('express')
const infoController = require('../app/controllers/InfoCtrl')

const router = express.Router()

router.get('/', infoController.index)



module.exports = router