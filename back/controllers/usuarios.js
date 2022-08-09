const { response } = require('express');
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
    newUser
}