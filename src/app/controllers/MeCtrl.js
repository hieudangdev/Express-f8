
const { render } = require('node-sass')
const { MongoosetoObject, mutipleMongoosetoObject } = require('../../util/mongoose')
const CourseModal = require('../modals/Courses')
const UserModal = require('../modals/User')
class MeCtrl {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        let courseQuery = CourseModal.find({})

       if(req.query.hasOwnProperty('_sort')) {
        courseQuery =courseQuery.sort({
            [req.query.column] : req.query.type
        })
       }
       
       

        Promise.all([courseQuery,CourseModal.countDocumentsDeleted({})])
            .then(([courses,deletedCount])=> {
                res.render('me/stored-courses' , {
                    deletedCount,
                    courses: mutipleMongoosetoObject(courses)})
                
            })
            .catch(next)

    }
    storedUser(req, res, next) {
        let courseQuery = UserModal.find({})

       if(req.query.hasOwnProperty('_sort')) {
        courseQuery =courseQuery.sort({
            [req.query.column] : req.query.type
        })
       }
       
       

        Promise.all([courseQuery,UserModal.countDocumentsDeleted({})])
            .then(([courses,deletedCount])=> {
                res.render('me/stored-user' , {
                    deletedCount,
                    courses: mutipleMongoosetoObject(courses)})
                
            })
            .catch(next)

    }
    
    
    trashCourses(req,res,next){
        Promise.all([CourseModal.findDeleted({}),CourseModal.count({})])
            .then(([courses,coursesCount]) => {
                res.render('me/trash-courses',{
                    coursesCount,
                    courses : mutipleMongoosetoObject(courses)})
            })
            .catch(next)
    }
}
module.exports = new MeCtrl























