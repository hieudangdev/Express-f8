
const { render } = require('node-sass')
const { MongoosetoObject, mutipleMongoosetoObject } = require('../../util/mongoose')
const CourseModal = require('../modals/Courses')
class MeCtrl {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        Promise.all([CourseModal.find({}),CourseModal.countDocumentsDeleted({})])
            .then(([courses,deletedCount])=> {
                res.render('me/stored-courses' , {
                    deletedCount,
                    courses: mutipleMongoosetoObject(courses)})
                
            })

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























