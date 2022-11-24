const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(cors());

//Settings
app.set('port', 3000);
mongoose.connect('mongodb://localhost/tercera_bd')
    .then(db => console.log('conectado'))
    .catch(err => console.error(err));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use('/citaciones',require('./routes/citaciones'));
app.use('/licencias',require('./routes/licencias'));
app.use('/auth/',require('./routes/auth'));
app.use('/usuarios',require('./routes/usuarios'));

//Static Files
app.use(express.static(__dirname + '/public'));

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});