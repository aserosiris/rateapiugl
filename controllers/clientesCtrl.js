const User = require('../models/user');
const Cliente = require('../models/clientes');
/*
exports.createCliente = async (req, res) => {
    if(req.body.num_cliente === undefined || req.body.nombre_negocio === undefined || req.body.razon_social === undefined
        || req.body.corporacion === undefined || req.body.colonia_negocio === undefined || req.body.direccion === undefined){
        return res.status(200).json({error: 'Empty fields are not allowed'});
    }
  
    if(req.body.num_cliente === undefined || req.body.nombre_negocio === undefined || req.body.razon_social === undefined
        || req.body.corporacion === undefined || req.body.colonia_negocio === undefined || req.body.direccion === undefined){
        return res.status(200).json({error: 'Empty fields are not allowed'});
    }




    const newCliente = new Cliente();
    newCliente.num_cliente = req.body.num_cliente;
    newCliente.nombre_negocio = req.body.nombre_negocio;
    newCliente.razon_social = req.body.razon_social;
    newCliente.direccion = req.body.direccion;
    newCliente.colonia_negocio = req.body.colonia_negocio;
    newCliente.ciudad_negocio = req.body.ciudad_negocio;
    newCliente.corporacion = req.body.corporacion;
    newCliente.ruta = req.body.ruta;
    newCliente.lunes = req.body.lunes;
    newCliente.martes = req.body.martes;
    newCliente.miercoles = req.body.miercoles;
    newCliente.juevez = req.body.juevez;
    newCliente.viernes = req.body.viernes;
    newCliente.sabado = req.body.sabado;
    newCliente.domingo = req.body.domingo;
    newCliente.estatus = req.body.estatus;
    newCliente.admin = req.body.userId;

    const cliente = await newCliente.save();

    return res.status(200).json({message: 'Company created Successfully'});
}
*/

exports.getAllClientes = async (req, res) => {
    const results = await Cliente.find({});

    return res.status(200).json({result: results});
}