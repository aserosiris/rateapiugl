const mongoose = require('mongoose');

const detalleNotaSchema = mongoose.Schema({
DPN_FECHA: {type: Date},
DPN_NOTA: {type: String},
DPN_CLAVE: {type: Number},
DPN_DESCRIPCION: {type: String},
DPN_CANTIDAD_PIEZAS: {type: Number},
DPN_PRECIO: {type: Number},
DPN_IVA: {type: Number},
DPN_IEPS: {type: Number},
DPN_IMPORTE: {type: Number}
    
});

module.exports = mongoose.model('tb_hh_detalle_notas', detalleNotaSchema);
