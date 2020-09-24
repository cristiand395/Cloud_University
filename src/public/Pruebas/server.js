// Forma de traer modulos en Node //
const express = require('express');

// Inicializar express //
var app = express();

// Prueba de que funciona mandando un mensaje //
app.use('/', function(request, response){
    response.send('Hola k ase')
})

// Puerto en el que se establece la conexion //
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')