// RUTA-> /api/auth
const { Router } = require('express');
const router = Router();

//CONTROLLER
const { userLogin, tokenRenew, logOut } = require('../controllers/auth');

//MIDDLEWARES
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldValidate');
const { jwtValidate } = require('../middlewares/tokenValidate');

router.post('/', 
    [
        check('pass', 'Is Required, min 6 char').isLength({min: 6}),
        fieldsValidate
    ],
    userLogin
);

router.use(jwtValidate);

router.get('/renew', tokenRenew);

router.get('/logOut', logOut);


module.exports = router;
