const express = require('express')
const MeCtrl = require('../app/controllers/MeCtrl')


const router = express.Router()

router.get('/stored/courses', MeCtrl.storedCourses)
router.get('/trash/courses', MeCtrl.trashCourses)
router.get('/stored/user', MeCtrl.storedUser)



module.exports = router