const User = require('../models/user');
const notaDetallePreVentas = require('../models/tb_hh_nota_PreVentaDetalle');

exports.createPreNotaDetalleVenta = async (req, res) => {

    const newDetalleNota = new notaVentas();
    newDetalleNota.DPN_FECHA = req.body.DPN_FECHA;
    newDetalleNota.DPN_NOTA = req.body.DPN_NOTA;
    newDetalleNota.DPN_CLAVE = req.body.DPN_CLAVE;
    newDetalleNota.DPN_DESCRIPCION = req.body.DPN_DESCRIPCION;
    newDetalleNota.DPN_CANTIDAD_PIEZAS = req.body.DPN_CANTIDAD_PIEZAS;
    newDetalleNota.DPN_PRECIO = req.body.DPN_PRECIO;
    newDetalleNota.DPN_IVA = req.body.DPN_IVA;
    newDetalleNota.DPN_IEPS = req.body.DPN_IEPS;
    newDetalleNota.DPN_IMPORTE = req.body.DPN_IMPORTE;

    const detalleNota = await newDetalleNota.save();

    return res.status(200).json({message: 'registrado'});
}

exports.getAllNotaDetallePreVenta = async (req, res) => {
    const results = await notaDetallePreVentas.find({});

    return res.status(200).json({result: results});
}