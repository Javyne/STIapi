const { response } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidate = (req, res = response, next) => {

    //x-token header
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({ msg: 'Token invalido' });
    }

    try{
        const {user_id, nombre} = jwt.verify(token, process.env.SECRET_JWT_SEED)

        req.user_id = user_id;
        req.nombre = nombre;

    }catch(err){    
        return res.status(401).json({ msg: 'Token invalido' });

    }

    next();
}


module.exports = {
    jwtValidate,
};