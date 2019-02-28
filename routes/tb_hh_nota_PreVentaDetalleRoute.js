const express = require('express');
const router = express.Router();
const notaDetalleCtrl = require('../controllers/tb_hh_nota_PreVentaDetalleCtrl');



router.get('/detallePreNota/all', notaDetalleCtrl.getAllNotaDetallePreVenta);



module.exports = router;