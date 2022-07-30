const { response } = require('express');
const { deleteData, getData, getDatas, createData, updateData} = require('../database/db');


//Eliminar Equipos parapor id
const deleteEquipo = (req, res = response) => {
    const where = { equipo_id: parseInt(req.params.id) }
    deleteData(res, 'equipo', where);
}

//Obtener Equipo por id
const getEquipo = (req, res = response) => { 
    const where = { equipo_id: parseInt(req.params.id) }
    getData(res, 'equipo', where)
}

//Obtener todos los Equipos
const getEquipos = (req, res = response) => {
    getDatas(res, 'equipo');
}

//Crear Equipo
const createEquipo = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'equipo', data)
}

//Actualizar Equipo
const updateEquipo = (req, res = response) => { 
    const data = {...req.body};
    const where = { equipo_id: parseInt(req.params.id) }
    updateData(res, 'equipo', where, data)
}
module.exports = {
    deleteEquipo,
    getEquipo,
    getEquipos,
    createEquipo,
    updateEquipo
}