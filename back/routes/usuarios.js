//RUTA -> /api/usuarios
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { newUser, getUsers, getUser, editUser } = require('../controllers/usuarios');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');
const { isAdmin } = require('../middlewares/rolValidate');

router.use(jwtValidate);
router.use(isAdmin)

router.post('/new',
    [
        check('pass', 'Is Required, min 6 char').isLength({min: 6}),
        fieldsValidate
    ],
    newUser
);

router.get('/:id', getUser);
router.put('/:id', editUser);
router.get('/', getUsers);

module.exports = router;
