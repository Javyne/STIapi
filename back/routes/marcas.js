// RUTA-> /api/Marcas
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { getMarcas, getMarca, createMarca, updateMarca, deleteMarca } = require('../controllers/marca');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');


router.use(jwtValidate);

router.get('/', getMarcas);
router.get('/:id', getMarca);
router.post('/', createMarca);
router.put('/:id', updateMarca);
router.delete('/:id', deleteMarca);

module.exports = router;
