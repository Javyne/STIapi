// RUTA-> /api/clientes
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getClientes, getCliente, createCliente, updateCliente, deleteCliente } = require('../controllers/clientes');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;
