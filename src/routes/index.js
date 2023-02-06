const infoRouter = require('./info')
const siteRouter = require('./site')

function route(app) {


    app.use('/info', infoRouter)
    app.use('/', siteRouter)


}
module.exports = route
