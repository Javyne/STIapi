const { Router } = require('express');
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const router = Router();

const { getClientes, getCliente, createCliente, updateCliente, deleteCliente } = require('../controllers/clientes');
const { jwtValidate } = require('../middlewares/tokenValidate');

/*
RUTA /api/clientes
router.use(jwtValidate)
*/
router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);




module.exports = router;
