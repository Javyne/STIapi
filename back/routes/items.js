// RUTA-> /api/Items
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/items');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;