const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/cliente');

router.get('/kpicliente', ClienteController.cliente_kpi_cliente);

module.exports = router;

