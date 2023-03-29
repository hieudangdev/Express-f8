const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


const uri = 'mongodb+srv://computermaytinh232:Hh01215970603@cluster0.0mh3jat.mongodb.net/?retryWrites=true&w=majority'
async function connect() {

    try {
        await mongoose.connect(uri,{dbName:'classf9'})
        console.log('Connected')
    } catch (error) {
        console.log('connect fail')

    }

}

module.exports = { connect }