

var path = require('path')
var express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')

const sortmiddle = require('./app/middleware/sortmiddle')

// connect mongodb
db.connect()


var app = express()
const port = 3000

// static express
app.use(express.static(path.join(__dirname, 'public')))
// use get value from midlewave 
app.use(express.urlencoded({ extended: true }))

// parse request from brows

app.use(express.json())

// override method 
app.use(methodOverride('_method'))

morgan
app.use(morgan('combined'))


//custom middleware
app.use(sortmiddle)


app.engine('hbs', 
engine({ extname: '.hbs',
      helpers:{
        sum:(a,b)=> a + b ,
        sortable : (field,sort) => {
            const sortfield = field === sort.column ? sort.type : 'default'

          const icons = {
            default : 'bi bi-filter',
            asc : 'bi bi-sort-down',
            desc : 'bi bi-sort-up',
          }
          const types = { 
            default : 'desc',
            asc : 'desc',
            desc : 'asc',
          }

            const icon = icons[sortfield]
            const type = types[sortfield]
            return  `<a href="?_sort&column=${field}&type=${type}">
                          <i class="${icon}"></i>
                     </a>`


        }
      }      
}))
app.set('view engine', 'hbs')

app.set("views", path.join(__dirname, 'resources', 'Views'))

// Route
route(app)
app.listen(port, () => {
    return `App running ${port}`
})
