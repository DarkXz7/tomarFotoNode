🛠 Requisitos
✅ Node.js v14 o superior

✅ Navegador moderno (Chrome, Firefox, Edge, Safari)

✅ Cámara web habilitada (en PC o móvil)

✅ Permitir permisos de cámara en el navegador

🚀 Pasos para instalar y ejecutar
1. Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/DarkXz7/tomarFotoNode.git
cd tomarFotoNode
2. Inicializar el proyecto (si aún no tiene package.json)
bash
Copiar
Editar
npm init -y
3. Instalar las dependencias necesarias
bash
Copiar
Editar
npm install express multer cors
4. (Opcional) Instalar nodemon para reiniciar el servidor automáticamente al editar archivos
bash
Copiar
Editar
npm install --save-dev nodemon
5. Agregar el script de inicio en package.json
json
Copiar
Editar
"scripts": {
  "start": "nodemon server.js"
}
6. Iniciar el servidor
bash
Copiar
Editar
npm start


🌐 Acceder a la aplicación
Abre tu navegador y visita:
http://localhost:3000

🎯 Funcionamiento
Interfaz de Usuario
Muestra un video en vivo de tu cámara web.

Botón "📸 Tomar foto" para capturar la imagen.

Proceso de Captura
Al hacer clic en el botón, se congela el frame actual del video.

Se muestra una vista previa.

La imagen se envía automáticamente al servidor.

Lado del Servidor
Recibe la imagen y la guarda en la carpeta uploads/.

Asigna un nombre único a cada foto (ejemplo: foto_1623456789.png).

🧠 Detalles Técnicos
Frontend (script.js)
Acceso a la cámara:
Usa navigator.mediaDevices.getUserMedia().

Captura de la foto:
Dibuja el frame actual del video en un canvas oculto.

Envío al servidor:
Convierte el canvas a Blob y lo envía mediante fetch.

Backend (server.js)
Configuración de Multer:

javascript
Copiar
Editar
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, 'foto_' + Date.now() + path.extname(file.originalname));
  }
});
Ruta para subir fotos:

javascript
Copiar
Editar
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).send('No se recibió archivo');
  res.send('Foto guardada correctamente');
});