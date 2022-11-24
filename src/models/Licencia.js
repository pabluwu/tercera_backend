const mongoose = require('mongoose');
const { Schema } = mongoose;




const Licencia = new Schema({
    asunto: {type: String, required: true},
    motivo: {type: String, required: true},
    enviar_copia : { type: Boolean, required: true},
    citacion_id : { type: mongoose.ObjectId, required: true },
    usuario_id : { type: mongoose.ObjectId, required: true}
    },
    { timestamps : true }
    );

module.exports = mongoose.model('Licencia', Licencia);