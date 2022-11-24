const express = require('express');
const verify = require('../routes/verifyToken');

const router = express.Router();


const Usuario = require('../models/Usuario')
const Citacion = require('../models/Citacion')

router.get('/', verify, async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

router.get('/:id', verify, async(req, res)=> {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);

});


module.exports = router;