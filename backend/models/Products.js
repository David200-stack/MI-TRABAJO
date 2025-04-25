const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre del producto
  description: { type: String, required: true }, // Descripción del producto
  price: { type: Number, required: true }, // Precio
  category: { type: String }, // Categoría del producto (opcional)
  image: { type: String } // URL de la imagen (opcional)
});

module.exports = mongoose.model('Product', productSchema);