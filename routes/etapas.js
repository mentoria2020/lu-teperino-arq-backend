const express = require('express');

const router = express.Router();

const EtapasController = require('../controllers/EtapasController');

router.get('/', EtapasController.index);

router.get('/:id', EtapasController.show);

router.post('/', EtapasController.store);

router.put('/:id', EtapasController.update);

router.delete('/:id', EtapasController.delete);

module.exports = router;
