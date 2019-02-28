const express = require('express');
const router = express.Router();
const notaVentaCtrl = require('../controllers/tb_hh_nota_PreVentaCtrl');



router.get('/notaPreVenta/all', notaVentaCtrl.getAllNotaPreVenta);

module.exports = router;