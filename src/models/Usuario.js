const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const Usuario = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique : true,
        validate: [validator.isEmail, 'invalid email']
          // validator : validator.isEmail(), 
          // message: 'email inválido.'}},
    },
    number: {
        type     : Number,
        required : true,
        unique   : true,
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
      },
    password : { type: String, required: true},
    fecha_nacimiento : { type: Date, required: true}
    },
    { timestamps : true }
    );

module.exports = mongoose.model('Usuario', Usuario);