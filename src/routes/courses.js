const express = require('express')
const CourseCtrl = require('../app/controllers/CourseCtrl')

const router = express.Router()

router.get('/create', CourseCtrl.create)
router.get('/edit/:id', CourseCtrl.edit)
router.delete('/del/:id', CourseCtrl.delete)
router.put('/:id', CourseCtrl.update)
router.post('/store', CourseCtrl.store)
router.get('/:slug', CourseCtrl.show)



module.exports = router