const express = require('express');
const router = express.Router();

const Citacion = require('../models/Citacion');

const verify = require('../routes/verifyToken');

router.get('/', verify, async (req, res) => {
    const citaciones = await Citacion.find();
    res.json(citaciones);
});

router.post('/', verify, async (req, res) =>{
    try{
        const citacion = new Citacion(req.body);
        console.log(citacion);
        await citacion.save();
        res.json(citacion);
    }catch(error){
        res.json(error)
    }
});

router.get('/:id', verify,  async(req, res)=> {
    const citacion = await Citacion.findById(req.params.id);
    res.json(citacion);

});


module.exports = router;