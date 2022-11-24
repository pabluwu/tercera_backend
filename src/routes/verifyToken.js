const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('Authorization');
    if(!token) return res.status(401).send('Acceso-denegado');

    try{
        const verificado = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verificado;
        next();
    }catch(error){
        res.status(400).send('Usuario invalido');
    }
};
