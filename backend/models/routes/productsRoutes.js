const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Modelo de productos

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Encuentra todos los productos en la base de datos
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Crea un nuevo producto con los datos recibidos
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el producto' });
  }
});

// Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

module.exports = router;