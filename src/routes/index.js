const infoRouter = require('./info')
const meRouter = require('./me')
const siteRouter = require('./site')
const userRouter = require('./user')
const coursesRouter = require('./courses')

function route(app) {


    app.use('/info', infoRouter)
    app.use('/user', userRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', siteRouter)
}
module.exports = route
