const { response } = require('express');
const { generateJWT } = require('../helpers/jwt');
const { prisma, getDatas, getData, updateData } = require('../database/db');

//BcryptJS
const bcrypt = require('bcryptjs');

//Nuevo usuario
const newUser = async (req, res = response) => {
    //Request del body
    const { nombre, user_name, rol, tecnico, obs } = req.body;

    try {
        //Busca el usuario, si existe retorna error
        let user = await prisma.usuario.findFirst({ where: { user_name } });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario existente'
            });
        }

        //Encripta contraseña
        const salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(req.body.pass, salt);

        //Crea usuario y retorna user_id
        const { user_id } = await prisma.usuario.create({
            data: { user_name, pass, nombre, rol, tecnico, obs }
        });

        //Respuesta
        if (user_id){
            res.status(201).json({created:true});//CREADO
        }else{
            res.status(404).json({created:false});//NO ENCONTRADO
        }

        //Si hay error en la BD retorna ERROR
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

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
        const token = await generateJWT(user.user_id, user.nombre, user.admin)

        //Respuesta JWT
        res.status(201).json(token);

        //Si hay error en la BD retorna ERROR
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

//Renovar token
const tokenRenew = async (req, res = response) => {

    //Crear nuevo token
    const { user_id, nombre, a } = req;

    const token = await generateJWT(user_id, nombre, a);

    //Respuesta JWT
    res.status(201).json(token);
}

const logOut = async (req, res = response) => {
    
}

//Obtener todos los usuarios
const getUsers = (req, res = response) => {
    getDatas(res, "usuario");
}

//Obtener un usuario por id
const getUser = (req, res = response) => { 
    
    const where = { user_id: parseInt(req.params.id) }

    getData(res, "usuario", where)
    
}

//editar usuario
const editUser = (req, res = response) => { 

    const data = {...req.body};
    const where = { user_id: parseInt(req.params.id) }

    updateData(res, "usuario", where, data)
}



module.exports = {
    editUser,
    getUser,
    getUsers,
    logOut,
    newUser,
    tokenRenew,
    userLogin
};