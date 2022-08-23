const router = require('express').Router();
const mensajeController = require('../controllers/mensajeController');

router.post('/', mensajeController.newMessage);
router.get('/', mensajeController.getMessages);

module.exports = router;