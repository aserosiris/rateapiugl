const mongoose = require('mongoose');

const onlineSchema = mongoose.Schema({
    estatus:{type: String}
});

module.exports = mongoose.model('tb_hh_onlines', onlineSchema);