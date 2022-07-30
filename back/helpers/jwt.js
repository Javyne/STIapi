const jwt = require('jsonwebtoken');

const generateJWT = (user_id, nombre, a) => {

    return new Promise((resolve, reject) => {
        //Creo peyload con data
        const peyload = { user_id, nombre, a}

        //Creo el JWT con la palabra secreta y con tiempo de expiracion de 2 hs
        jwt.sign(
            peyload,
            process.env.SECRET_JWT_SEED,
            { expiresIn: '2h' },
            (err, token) => {
                //Si hay error al crear el token
                if (err) {
                    console.log(err)
                    reject('No se pudo generar el token');
                }

                resolve(token);

            });
    });
};


module.exports = {
    generateJWT
}