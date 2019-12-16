const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/cliente');

router.get('/listclientes', ClienteController.cliente_lista_cliente);

module.exports = router;

