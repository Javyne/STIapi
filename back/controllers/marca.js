const { response } = require('express');
const { deleteData, getData, getDatas, createData, updateData} = require('../database/db');


//Eliminar Marca por id
const deleteMarca = (req, res = response) => {
    const where = { marca: req.params.id }
    deleteData(res, 'marca', where);
}

//Obtener Marca por id
const getMarca = (req, res = response) => { 
    const where = { marca: req.params.id }
    getData(res, 'marca', where)
}

//Obtener todas las Marcas
const getMarcas = (req, res = response) => {
    getDatas(res, 'marca');
}

//Crear Marca
const createMarca = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'marca', data)
}

//Actualizar Marca
const updateMarca = (req, res = response) => { 
    const data = {...req.body};
    const where = { marca: parseInt(req.params.id) }
    updateData(res, 'marca', where, data)
}
module.exports = {
    deleteMarca,
    getMarca,
    getMarcas,
    createMarca,
    updateMarca
}