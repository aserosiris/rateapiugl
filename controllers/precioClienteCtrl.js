const User = require('../models/user');
const PrecioCliente = require('../models/TB_HH_PRECIO_CLIENTE');



exports.getAllPrecioClientes = async (req, res) => {
    const results = await PrecioCliente.find({});

    return res.status(200).json({result: results});
}


