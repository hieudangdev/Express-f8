
const { MongoosetoObject } = require('../../util/mongoose')
const UserModal = require('../modals/User')

class UserCtrl {
    //[GET]
    login(req,res,next) {
        res.render('user/login')
    }
    logout(req,res,next){
        res.render('user/logout')
    }
    
    // [POST]

    createUser(req,res,next) {

        const user = new UserModal(req.body)
        user.save()
            .then(() => res.redirect('/me/stored/courses'))   //trở về trang chủ 
            .catch(err => { next() })

    }


}

module.exports = new UserCtrl