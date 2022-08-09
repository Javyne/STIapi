// RUTA-> /api/Equipos
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getEquipos, getEquipo, createEquipo, updateEquipo, deleteEquipo } = require('../controllers/equipo');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getEquipos);
router.get('/:id', getEquipo);
router.post('/', createEquipo);
router.put('/:id', updateEquipo);
router.delete('/:id', deleteEquipo);

module.exports = router;
