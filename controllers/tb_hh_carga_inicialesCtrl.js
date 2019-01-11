const User = require('../models/user');
const carga_inicial = require('../models/tb_hh_ruta');



exports.getAllCarga_Inicial = async (req, res) => {
    const results = await carga_inicial.find({});

    return res.status(200).json({result: results});
}
