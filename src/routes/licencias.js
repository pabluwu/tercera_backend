const express = require('express');
const verify = require('../routes/verifyToken');

const router = express.Router();


const Licencia = require('../models/Licencia')
const Citacion = require('../models/Citacion')

router.get('/', verify, async (req, res) => {
    const licencias = await Licencia.find();
    res.json(licencias);
});

router.post('/', verify, async (req, res) =>{
    try{
        try {
            const citacion = await Citacion.findById(req.body.citacion_id)
        }catch(err){
            return res.json('No existe citación con ese id.')
        }
        const licencia = new Licencia(req.body);
        await licencia.save();
        res.json('Licencia creada.');
    }catch(error){
        res.json(error)
    }
});

router.get('/:id', verify, async(req, res)=> {
    const licencia = await Licencia.findById(req.params.id);
    res.json(licencia);

});


module.exports = router;