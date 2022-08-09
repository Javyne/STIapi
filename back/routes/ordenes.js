// RUTA-> /api/Ordens
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getOrdens, getOrden, createOrden, updateOrden, deleteOrden } = require('../controllers/orden');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getOrdens);
router.get('/:id', getOrden);
router.post('/', createOrden);
router.put('/:id', updateOrden);
router.delete('/:id', deleteOrden);

module.exports = router;
