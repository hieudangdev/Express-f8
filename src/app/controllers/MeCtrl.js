
const { render } = require('node-sass')
const { MongoosetoObject, mutipleMongoosetoObject } = require('../../util/mongoose')
const CourseModal = require('../modals/Courses')
class MeCtrl {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        CourseModal.find({})
            .then(courses => {
                res.render('me/stored-courses' , {courses: mutipleMongoosetoObject(courses)})
            })
            .catch(
                next
            )
    
    }
}
module.exports = new MeCtrl























