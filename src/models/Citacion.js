const mongoose = require('mongoose');
const { Schema } = mongoose;




const Citacion = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    lugar: {type: String, required: true},
    fecha: {type: Date, required: true},
});

module.exports = mongoose.model('Citacion', Citacion);