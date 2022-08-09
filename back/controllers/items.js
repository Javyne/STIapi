const { response } = require('express');
const { deleteData, getData, getDatas, createData, prisma, updateData} = require('../database/db');


//Eliminar items por id
const deleteItem = (req, res = response) => {
    const where = { item_id: parseInt(req.params.id) }
    deleteData(res, 'item', where);
}

//Obtener Item por id
const getItem = (req, res = response) => { 
    const where = { item_id: parseInt(req.params.id) }
    getData(res, 'item', where)
}

//Obtener todos los Items
const getItems = (req, res = response) => {
    getDatas(res, 'item');
}

//Crear Item
const createItem = (req, res = response) => { 
    const data = {...req.body};
    createData(res, 'item', data)
}

//Actualizar Item
const updateItem = (req, res = response) => { 
    const data = {...req.body};
    const where = { item_id: parseInt(req.params.id) }
    updateData(res, 'item', where, data)
}
module.exports = {
    deleteItem,
    getItem,
    getItems,
    createItem,
    updateItem

}