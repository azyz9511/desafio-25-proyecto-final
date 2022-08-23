const router = require('express').Router();
const registerController = require('../controllers/registerController');
const passport = require('../utils/passport');


router.get('/', registerController.registro);
router.get('/error', registerController.error);
router.get('/exito', registerController.exito);
router.get('/logout', registerController.logout);
router.post('/', passport.authenticate('registro',{
    successRedirect: '/register/logout',
    failureRedirect: '/register/error'
}));

module.exports = router;