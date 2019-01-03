const User = require('../models/user');
const PrecioCliente = require('../models/TB_HH_PRECIO_CLIENTE');



exports.getAllPrecioClientes = async (req, res) => {
    //const results = await PrecioCliente.find({});

    //return res.status(200).json({result: results});

    const results = await PrecioCliente.find(
        { 
               // "PRC_RUTA_CLIE" : Number(50)
            
        });
    
        return res.status(200).json({result:results});
}



