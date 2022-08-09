// RUTA-> /api/TipoEquipos
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getTipoEquipos, getTipoEquipo, createTipoEquipo, updateTipoEquipo, deleteTipoEquipo } = require('../controllers/tipoEquipo');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getTipoEquipos);
router.get('/:id', getTipoEquipo);
router.post('/', createTipoEquipo);
router.put('/:id', updateTipoEquipo);
router.delete('/:id', deleteTipoEquipo);

module.exports = router;
