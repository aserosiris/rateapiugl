const mongoose = require('mongoose');

const notaPreVentaySchema = mongoose.Schema({
    NVP_NOTA: {type: String},
    NVP_CLIENTE: {type: Number},
    NVP_RAZON_SOCIAL: {type: String},
    NVP_NOMBRE_CLIENTE: {type: String},
    NVP_FECHA: {type: Date},
    NVP_RUTA:{type: Number},
    NVP_TIPO_VENTA: {type: String},
    NVP_SUBTOTAL:{type: Number},
    NVP_IVA: {type: Number},
    NVP_IEPS:{type: Number},
    NVP_RECONOCIMIENTO: {type: Number},
    NVP_TOTAL: {type: Number},
    NVP_CORPO_CLIENTE: {type: Number},
    NVP_ESTATUS_NOTA: {type: String},
    NVP_KILOLITROS_VENDIDOS: {type: Number}
    
});

module.exports = mongoose.model('tb_hh_nota_ventasPres', notaPreVentaySchema);
