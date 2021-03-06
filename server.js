const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

require('./models/dreamListModel')
require('./models/userModel')

// mongooseinstance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/DreamCatcherdb', { useNewUrlParser: true })

port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// importing route
let routes = require('./routes/index')

// register the route
routes(app)

app.listen(port, () => console.log('dreamcatcher RESTFUL API server started on: ' + port));
