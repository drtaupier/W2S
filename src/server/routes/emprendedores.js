const { Router } = require('express');
const router = Router();
const { emprendedores } = require('../controllers/emprendedoresController.js');

router.get('/', emprendedores);

module.exports = router;
