const mongoose = require('mongoose');

const traspasoSchema = mongoose.Schema({
    TR_FECHA:{type: Date},
    TR_RUTA:{type: Number},
    TR_CLAVE:{type: Number},
    TR_CONVERSION_PZ: {type:Number},
    TR_ESTATUS:{type: String},
    TR_TIPO:{type: String}
});

module.exports = mongoose.model('tb_hh_traspasos', traspasoSchema);
