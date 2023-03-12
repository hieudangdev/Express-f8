
const { MongoosetoObject } = require('../../util/mongoose')
const CourseModal = require('../modals/Courses')
class CourseCtrl {
    // [GET] courses/:slug
    show(req, res, next) {
        CourseModal.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: MongoosetoObject(course) })
            })
            .catch(next)
    }
    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] courses/store
    store(req, res, next) {
        const FormData = req.body
        
        FormData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new CourseModal(FormData)
        course.save()
            .then(() => res.redirect('/'))   //trở về trang chủ 
            .catch(err => { next() })
    }
    //[GET] courses/edit/:id
    edit(req,res,next) {
        CourseModal.findById(req.params.id)
        .then(course => {
            res.render('courses/edit',{course:MongoosetoObject(course)})
        })
        .catch(next)
    }

    // [PUT] courses/:id
    update(req,res,next){
        CourseModal.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/courses')) 
        .catch(next)
    }

    // [DELETE] courses/del/:id
    delete(req,res,next) {
        CourseModal.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

}

module.exports = new CourseCtrl























