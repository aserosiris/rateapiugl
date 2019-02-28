const mongoose = require('mongoose');

const notaPreVentaySchema = mongoose.Schema({
    NPV_NOTA: {type: String},
    NPV_CLIENTE: {type: Number},
    NPV_RAZON_SOCIAL: {type: String},
    NPV_NOMBRE_CLIENTE: {type: String},
    NPV_FECHA: {type: Date},
    NPV_RUTA:{type: Number},
    NPV_TIPO_VENTA: {type: String},
    NPV_SUBTOTAL:{type: Number},
    NPV_IVA: {type: Number},
    NPV_IEPS:{type: Number},
    NPV_RECONOCIMIENTO: {type: Number},
    NPV_TOTAL: {type: Number},
    NPV_CORPO_CLIENTE: {type: Number},
    NPV_ESTATUS_NOTA: {type: String},
    NPV_KILOLITROS_VENDIDOS: {type: Number}
    
});

module.exports = mongoose.model('tb_hh_nota_preventas', notaPreVentaySchema);
