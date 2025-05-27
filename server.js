const express = require('express'); // Framework web para Node.js
const multer = require('multer');   // Middleware para manejo de archivos
const path = require('path');       // Utilidades para rutas de archivos

const app = express();
const port = 3000;

// Servir contenido estático (HTML, JS, CSS) desde la carpeta 'public'
app.use(express.static('public'));

// Configurar almacenamiento para las fotos recibidas con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'), // Carpeta destino
  filename: (req, file, cb) => {
    // Crear nombre único para evitar sobreescritura
    cb(null, 'foto_' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Ruta POST para recibir la foto (campo 'photo') y guardarla
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).send('No se recibió archivo');
  res.send('Foto guardada correctamente');
});

// Iniciar servidor en puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
