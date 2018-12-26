const mongoose = require('mongoose');

const clientesSchema = mongoose.Schema({
    num_cliente: {type: String},
    nombre_negocio: {type: String, default: ''},
    razon_social: {type: String, default: ''},
    direccion: {type: String, default: ''},
    colonia_negocio: {type: String, default: ''},
    ciudad_negocio: {type: String, default: ''},
    corporacion: {type: String, default: ''},
    ruta: {type: String, default: ''},
    lunes: {type: String, default: ''},
    martes: {type: String, default: ''},
    miercoles: {type: String, default: ''},
    juevez: {type: String, default: ''},
    sabado: {type: String, default: ''},
    domingo: {type: String, default: ''},
    estatus: {type: String, default: ''},
    admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    imageId: {type:String, default: ''},
    imageVersion: {type:String, default: ''}
});

module.exports = mongoose.model('Cliente', clientesSchema);