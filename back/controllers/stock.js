const { response } = require('express');
const { deleteData, getData, getDatas, createData, prisma, updateData} = require('../database/db');


//Eliminar Stocked por id
const deleteStock = (req, res = response) => {
    const where = { stock_id: parseInt(req.params.id) }
    deleteData(res, 'stock', where);
}

//Obtener Stock por id
const getStock = (req, res = response) => { 
    const where = { stock_id: parseInt(req.params.id) }
    getData(res, 'stock', where)
}

//Obtener todos los Stocks
const getStocks = (req, res = response) => {
    getDatas(res, 'stock');
}

//Crear Stock
const createStock = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'stock', data)
}

//Actualizar Stock
const updateStock = (req, res = response) => { 
    const data = {...req.body};
    const where = { stock_id: parseInt(req.params.id) }
    updateData(res, 'stock', where, data)
}
module.exports = {
    deleteStock,
    getStock,
    getStocks,
    createStock,
    updateStock
}