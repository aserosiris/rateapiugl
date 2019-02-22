const express = require('express');
const router = express.Router();
const tb_hh_onlineCtrl = require('../controllers/tb_hh_onlineCtrl');



router.get('/pedidos/all', tb_hh_onlineCtrl.getStatus);



module.exports = router;