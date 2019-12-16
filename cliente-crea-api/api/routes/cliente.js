const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/cliente');

router.post('/creacliente', ClienteController.cliente_crear_cliente);

module.exports = router;

