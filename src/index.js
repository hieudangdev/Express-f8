
var path = require('path')
var express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')

const route = require('./routes')


var app = express()
const port = 3000

// static express
app.use(express.static(path.join(__dirname, 'public')))
// use get value from midlewave 
app.use(express.urlencoded({ extended: true }))

// parse request from browser 
app.use(express.json())

//morgan
// app.use(morgan('combined'))

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/Views'))


// Route
route(app)



app.listen(port, () => {
    return `App running ${port}`
})
