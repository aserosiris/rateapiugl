const User = require('../models/user');
const notaPreVentas = require('../models/tb_hh_nota_ventasPre');



exports.getAllNotaPreVenta = async (req, res) => {
    const results = await notaPreVentas.find({});

    return res.status(200).json({result: results});
}