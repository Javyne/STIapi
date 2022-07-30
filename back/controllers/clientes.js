const { response } = require('express');
const { deleteData, getData, getDatas, createData, updateData} = require('../database/db');


//Eliminar Clientes por id
const deleteCliente = (req, res = response) => {
    const where = { cliente_id: parseInt(req.params.id) }
    deleteData(res, 'cliente', where);
}

//Obtener Cliente por id
const getCliente = (req, res = response) => { 
    const where = { cliente_id: parseInt(req.params.id) }
    getData(res, 'cliente', where)
}

//Obtener todos los Clientes
const getClientes = (req, res = response) => {
    getDatas(res, 'cliente');
}

//Crear Cliente
const createCliente = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'cliente', data)
}

//Actualizar Cliente
const updateCliente = (req, res = response) => { 
    const data = {...req.body};
    const where = { cliente_id: parseInt(req.params.id) }
    updateData(res, 'cliente', where, data)
}

module.exports = {
    deleteCliente,
    getCliente,
    getClientes,
    createCliente,
    updateCliente
}