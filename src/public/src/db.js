// Desde aqui se conecta a la base de datos
// Modulo para iniciar server
const mongoose = require('mongoose');

// Define la ruta donde se conecta
mongoose.connect('mongodb://localhost/comment-list', {
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err))