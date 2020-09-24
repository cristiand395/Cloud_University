const express = require('express')
const path = require('path')                // Permite ubicar direcciones independiente del S.O.
const engine = require('ejs-mate');         // Motor de plantillas


// Inicializaciones
const app = express()
require('./db') 

// Settings of the server
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)                   // Definir motor
app.set('view engine', 'ejs')               // Iniciar motor de plantillas

// Middlewares -- preprocesos de rutas
app.use(express.urlencoded({extended: false})) 
app.use(express.json())      

// routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server port ${app.get('port')}`)
})