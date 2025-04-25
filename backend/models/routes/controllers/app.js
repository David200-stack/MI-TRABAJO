const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); // Importa las rutas de productos
const app = express();

// Configurar CORS y el body parser
app.use(cors());
app.use(express.json());

// Conexión con MongoDB (cambia la conexión si usas MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conexión exitosa con MongoDB'))
  .catch((err) => console.error('❌ Error conectando con MongoDB:', err));

// Ruta principal para probar el backend
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de tu página de figuras 3D!');
});

// Ruta de productos
app.use('/products', productRoutes); // Todas las rutas de productos estarán bajo '/products'

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));