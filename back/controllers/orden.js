const { response } = require('express');
const { deleteData, getData, getDatas, createData, updateData} = require('../database/db');


//Eliminar Orden parapor id
const deleteOrden = (req, res = response) => {
    const where = { orden_id: parseInt(req.params.id) }
    deleteData(res, 'orden', where);
}

//Obtener Orden por id
const getOrden = (req, res = response) => { 
    const where = { orden_id: parseInt(req.params.id) }
    getData(res, 'orden', where)
}

//Obtener todos los Ordens
const getOrdens = (req, res = response) => {
    getDatas(res, 'orden');
}

//Crear Orden
const createOrden = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'orden', data)
}

//Actualizar Orden
const updateOrden = (req, res = response) => { 
    const data = {...req.body};
    const where = { orden_id: parseInt(req.params.id) }
    updateData(res, 'orden', where, data)
}
module.exports = {
    deleteOrden,
    getOrden,
    getOrdens,
    createOrden,
    updateOrden
}