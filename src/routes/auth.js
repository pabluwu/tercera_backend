const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const Usuario = require('../models/Usuario');

router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        usuario = new Usuario(req.body);
        usuario.password = hashedPassword;
        await usuario.save();
        res.json(usuario);
    }catch(error){
        res.json(error)
    }
    
});

router.post('/login', async (req, res) => {
    const user = await Usuario.findOne({email : req.body.email});
    if(!user) return res.status(400).send('Email no registrado.');
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(200).send('Contraseña invalida.');

    //Crear token para usuario.
    const token = jwt.sign({ _id : user._id}, process.env.TOKEN_SECRET);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.header('Authorization', token).send(token);
});

// router.get('/:id', async(req, res)=> {
//     const citacion = await Citacion.findById(req.params.id);
//     res.json(citacion);

// });


module.exports = router;