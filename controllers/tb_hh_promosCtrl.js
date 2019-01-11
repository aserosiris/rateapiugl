const User = require('../models/user');
const Promo = require('../models/tb_hh_promos');



exports.getAllPromos = async (req, res) => {
    const Promo = await Ruta.find({});

    return res.status(200).json({result: results});
}
