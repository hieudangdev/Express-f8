
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

        req.body.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new CourseModal(req.body)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))   //trở về trang chủ 
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
    replica(req,res,next) {
        CourseModal.findById(req.params.id)
        .then(course => {
            res.render('courses/replica',{course:MongoosetoObject(course)})
        })
        .catch(next)
    }
    

    // [PUT] courses/:id
    update(req,res,next){
        req.body.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        CourseModal.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/courses')) 
        .catch(next)
    }

    // [DELETE] courses/detroy/:id
    detroy(req,res,next) {
        CourseModal.delete({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    // [DELETE] courses/force/:id
    force(req,res,next) {
        CourseModal.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    // [PATCH] courses/restore/:id
    restore(req,res,next) {
        CourseModal.restore({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    // [POST] courses/handleform/
    handleform(req,res,next) {
         switch (req.body.action) {
            case 'delete':
                    CourseModal.delete({_id: {$in: req.body.coursesId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            case 'modify': 
                    CourseModal.restore({_id: {$in: req.body.coursesId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                            break;
            case 'force': 
                    CourseModal.deleteMany({_id: {$in: req.body.coursesId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                            break;
            default:q
                res.json({message: 'action is invalid!!'})
                break;
         }
    }

}

module.exports = new CourseCtrl























