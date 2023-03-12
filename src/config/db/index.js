const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Express_Class_dev')
        console.log('Connected')
    } catch (error) {
        console.log('connect fail')

    }

}

module.exports = { connect }