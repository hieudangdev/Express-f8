const express = require('express')
const UserCtrl = require('../app/controllers/UserCtrl')

const router = express.Router()

router.get('/login', UserCtrl.login)
router.get('/signin', UserCtrl.signin)
router.post('/create', UserCtrl.createUser)
router.post('/account', UserCtrl.account)



module.exports = router