const express = require('express')
const UserCtrl = require('../app/controllers/UserCtrl')

const router = express.Router()

router.get('/login', UserCtrl.login)
router.get('/logout', UserCtrl.logout)
router.post('/create', UserCtrl.createUser)
router.get('/logout', UserCtrl.logout)



module.exports = router