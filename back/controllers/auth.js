const { response } = require('express');
const { generateJWT, logOutJWT } = require('../helpers/jwt');
const { prisma } = require('../database/db');

//BcryptJS
const bcrypt = require('bcryptjs');

//Login user
const userLogin = async (req, res = response) => {

    //Request del body
    const { user_name, pass } = req.body;

    try {
        //Busca el usuario, si no existe retorna error
        const user = await prisma.usuario.findFirst({ where: { user_name } });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Nombre de usuario o contraseña incorrectos'
            });
        }

        //Compara contraseña
        const validPassword = bcrypt.compareSync(pass, user.pass);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Nombre de usuario o contraseña incorrectos'
            });
        }

        //Creo el JWT
        const token = await generateJWT(user.user_id, user.nombre)

        //Respuesta JWT
        res.status(200).json({token, uid: user.user_id, nombre: user.nombre});

        //Si hay error en la BD retorna ERROR
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

//Renovar token
const tokenRenew = async (req, res = response) => {

    //Crear nuevo token
    const { user_id, nombre } = req;

    const token = await generateJWT(user_id, nombre);

    //Respuesta JWT
    res.status(201).json({token, uid: user_id, nombre: nombre});
}

const logOut = async (req, res = response) => {
    res.status(200).json(logOutJWT())
}




module.exports = {
    logOut,
    tokenRenew,
    userLogin
};