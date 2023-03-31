
const { MongoosetoObject, mutipleMongoosetoObject } = require('../../util/mongoose')
const UserModal = require('../modals/User')

class UserCtrl {
    //[GET]
    login(req,res,next) {
        res.render('user/login')
    }
    signin(req,res,next){
        res.render('user/signin')
    }
    
    // [POST]
    createUser(req,res,next) {

        const user = new UserModal(req.body)
        user.save()
            .then(() => res.redirect('/me/stored/user'))   //trở về trang chủ 
            .catch(err => { next() })

    }

    account(req,res,next) {
         UserModal.findOne({name: req.body.name})
            .then((user)=> {
                if(user.password === req.body.password){
                  res.render('me/account',{user: MongoosetoObject(user)})
                }else{
                    res.send('incorrect password!')
                    res.redirect('back')
                }

            })
            .catch(next)


    }


}

module.exports = new UserCtrl