
---

## 🛠 Requisitos

- ✅ Node.js v14 o superior
- ✅ Navegador moderno (Chrome, Firefox, Edge, Safari)
- ✅ Cámara web habilitada (en PC o móvil)
- ✅ Permitir permisos de cámara en el navegador

---

## 🚀 Pasos para instalar y ejecutar

### 1. Clonar el repositorio
```bash
git clone https://github.com/DarkXz7/tomarFotoNode.git



### 2 Inicializa el proyecto (si aún no tiene package.json):
npm init -y

### Instala las dependencias necesarias:
npm install express multer cors


### Si se necesita que el servidor se reinicie automáticamente cuando se editen archivos:
npm install --save-dev nodemon


### En package.json, agregar este script:
"scripts": {
  "start": "nodemon server.js"
}

### Inicia el servidor:


node server.js


### Abre tu navegador y navega a:

http://localhost:3000



### Funcionamiento
### Interfaz de Usuario:

La página muestra un video en vivo de tu cámara web.

Botón "📸 Tomar foto" para capturar la imagen.

### Proceso de Captura:

Al hacer clic en el botón:

Se congela el frame actual del video.

Se muestra una vista previa.

La imagen se envía automáticamente al servidor.

### Servidor:

Recibe la imagen y la guarda en la carpeta uploads/.

Asigna un nombre único a cada foto (ej: foto_1623456789.png).

### Detalles Técnicos
Frontend (script.js)
Acceso a la cámara: Usa navigator.mediaDevices.getUserMedia().

Captura de foto: Dibuja el frame actual del video en un canvas oculto.

Envío al servidor: Convierte el canvas a Blob y lo envía mediante Fetch API.

### Backend (server.js)
Configuración de Multer:

### javascript
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, 'foto_' + Date.now() + path.extname(file.originalname));
  }
});
Ruta para subir fotos:

javascript
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).send('No se recibió archivo');
  res.send('Foto guardada correctamente');
});

