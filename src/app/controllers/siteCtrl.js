
const CourseModal = require('../modals/Courses')
const { mutipleMongoosetoObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /info
    home(req, res, next) {
        // res.render('home')
        CourseModal.find({})
            .then(courses => {
                res.render('home', { courses: mutipleMongoosetoObject(courses) })
            })
            .catch(next)
    }
    search(req, res) {
        res.render('search')
    }
    login(req, res) {
        res.render('/user/login')
    }
    value(req, res) {
        res.send(req.body)
    }
}

module.exports = new SiteController























