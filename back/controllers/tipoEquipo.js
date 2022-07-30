const { response } = require('express');
const { deleteData, getData, getDatas, createData, updateData} = require('../database/db');


//Eliminar TipoEquipo por id
const deleteTipoEquipo = (req, res = response) => {
    const where = { tipo_equipo: req.params.id}
    deleteData(res, 'tipo_equipo', where);
}

//Obtener TipoEquipo por id
const getTipoEquipo = (req, res = response) => { 
    const where = { tipo_equipo: req.params.id }
    getData(res, 'tipo_equipo', where)
}

//Obtener todos los TipoEquipos
const getTipoEquipos = (req, res = response) => {
    getDatas(res, 'tipo_equipo');
}

//Crear TipoEquipo
const createTipoEquipo = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'tipo_equipo', data)
}

//Actualizar TipoEquipo
const updateTipoEquipo = (req, res = response) => { 
    const data = {...req.body};
    const where = { tipo_equipo: parseInt(req.params.id) }
    updateData(res, 'tipo_equipo', where, data)
}
module.exports = {
    deleteTipoEquipo,
    getTipoEquipo,
    getTipoEquipos,
    createTipoEquipo,
    updateTipoEquipo
}