const mongoose = require('mongoose');

const detalleNotaSchema = mongoose.Schema({
DNP_FECHA: {type: Date},
DNP_NOTA: {type: String},
DNP_CLAVE: {type: Number},
DNP_DESCRIPCION: {type: String},
DNP_CANTIDAD_PIEZAS: {type: Number},
DNP_PRECIO: {type: Number},
DNP_IVA: {type: Number},
DNP_IEPS: {type: Number},
DNP_IMPORTE: {type: Number}
    
});

module.exports = mongoose.model('tb_hh_detallePres', detalleNotaSchema);
