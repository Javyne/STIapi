const { Router } = require('express');
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const router = Router();

const { newUser, userLogin, tokenRenew, getUsers, getUser, editUser, logOut } = require('../controllers/auth');
const { jwtValidate } = require('../middlewares/tokenValidate');
const { isAdmin } = require('../middlewares/rolValidate');

/*
RUTA /api/auth
*/

router.post('/new',
    [
        check('pass', 'Is Required, min 6 char').isLength({min: 6}),
        fieldsValidate
    ],
    newUser
);

router.post('/', 
    [
        check('pass', 'Is Required, min 6 char').isLength({min: 6}),
        fieldsValidate
    ],
    userLogin
);

router.get('/renew', jwtValidate ,tokenRenew);

router.get('/logOut', jwtValidate ,logOut);

router.get('/', jwtValidate, isAdmin, getUsers);

router.get('/:id', getUser);

router.put('/:id', editUser)



module.exports = router;
