const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    id: { type: Number, require: true},
    descripcion: { type: String, require: true, max:100},
    precio: { type: Number, require: true},
    categoria: { type: String, require: true, max: 100},
    foto: { type: String, require: true, max:100}
});

module.exports = mongoose.model('productos',productoSchema);