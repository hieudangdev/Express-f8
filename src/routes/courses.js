const express = require('express')
const CourseCtrl = require('../app/controllers/CourseCtrl')

const router = express.Router()

router.get('/create', CourseCtrl.create)
router.get('/edit/:id', CourseCtrl.edit)
router.patch('/restore/:id', CourseCtrl.restore)
router.get('/replica/:id', CourseCtrl.replica)
router.delete('/detroy/:id', CourseCtrl.detroy)
router.delete('/force/:id', CourseCtrl.force)
router.put('/:id', CourseCtrl.update)
router.post('/store', CourseCtrl.store)
router.get('/:slug', CourseCtrl.show)



module.exports = router