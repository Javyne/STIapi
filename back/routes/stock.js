// RUTA-> /api/Stocks
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getStocks, getStock, createStock, updateStock, deleteStock } = require('../controllers/stock');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getStocks);
router.get('/:id', getStock);
router.post('/', createStock);
router.put('/:id', updateStock);
router.delete('/:id', deleteStock);

module.exports = router;