const User = require('../models/user');
const notaPreVentas = require('../models/tb_hh_nota_PreVentas');

exports.createNotaVenta = async (req, res) => {
    const newNotaVenta = new notaVentas();
    newNotaVenta.NPV_NOTA = req.body.NPV_NOTA;
    newNotaVenta.NPV_CLIENTE = req.body.NPV_CLIENTE;
    newNotaVenta.NPV_RAZON_SOCIAL = req.body.NPV_RAZON_SOCIAL;
    newNotaVenta.NPV_NOMBRE_CLIENTE = req.body.NPV_NOMBRE_CLIENTE;
    newNotaVenta.NPV_FECHA = req.body.NPV_FECHA;
    newNotaVenta.NPV_RUTA = req.body.NPV_RUTA;
    newNotaVenta.NPV_TIPO_VENTA = req.body.NPV_TIPO_VENTA;
    newNotaVenta.NPV_SUBTOTAL = req.body.NPV_SUBTOTAL;
    newNotaVenta.NPV_IVA = req.body.NPV_IVA;
    newNotaVenta.NPV_IEPS = req.body.NPV_IEPS;
    newNotaVenta.NPV_RECONOCIMIENTO = req.body.NPV_RECONOCIMIENTO;
    newNotaVenta.NPV_TOTAL = req.body.NPV_TOTAL;
    newNotaVenta.NPV_CORPO_CLIENTE = req.body.NPV_CORPO_CLIENTE;
    newNotaVenta.NPV_ESTATUS_NOTA = req.body.NPV_ESTATUS_NOTA;
    newNotaVenta.NPV_KILOLITROS_VENDIDOS = req.body.NPV_KILOLITROS_VENDIDOS;

    const notaPreVenta = await newNotaVenta.save();

    return res.status(200).json({message: 'Venta registrada'});
}

exports.getAllNotaPreVenta = async (req, res) => {
    const results = await notaPreVentas.find({});

    return res.status(200).json({result: results});
}