const User = require('../models/user');
const estatus = require('../models/tb_hh_online');



exports.getStatus = async (req, res) => {
    const results = await estatus.find({});

    return res.status(200).json({result: results});
}
