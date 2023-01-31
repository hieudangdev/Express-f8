
var path = require('path')
var express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')



var app = express()
const port = 3000

// static express
app.use(express.static(path.join(__dirname, 'public')))


//morgan
app.use(morgan('combined'))



app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/Views'))
console.log(path.join(__dirname, 'resources/Views'))

// Routes
app.get('/', function (req, res) {
    res.render('home')
})
app.get('/info', function (req, res) {
    res.render('info')
})

app.listen(port, () => {
    return `App running ${port}`
})
