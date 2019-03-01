const User = require('../models/user');
const notaDetallePreVentas = require('../models/tb_hh_nota_DetallePre');



exports.getAllNotaDetallePreVenta = async (req, res) => {
    const results = await notaDetallePreVentas.find({});

    return res.status(200).json({result: results});
}