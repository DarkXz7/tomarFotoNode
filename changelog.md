# 📸 Proyecto: Captura de Foto con Node.js y Cámara Web

Este proyecto permite capturar una imagen desde la cámara web del usuario y guardarla en el servidor utilizando Node.js, Express y Multer. Ideal para integraciones rápidas de captura de fotos desde el navegador.

---

## 🛠 Requisitos

Asegúrate de tener lo siguiente antes de comenzar:

- ✅ Node.js v14 o superior  
- ✅ Navegador moderno (Chrome, Firefox, Edge, Safari)  
- ✅ Cámara web habilitada (en PC o móvil)  
- ✅ Permitir permisos de cámara en el navegador  

---

## 🚀 Pasos para instalar y ejecutar

### 1️⃣ Clonar el repositorio

- git clone https://github.com/DarkXz7/tomarFotoNode.git
- cd tomarFotoNode




### 2️⃣ Inicializar el proyecto (si aún no existe package.json)

- npm init -y


### 3️⃣ Instalar las dependencias necesarias
- npm install express multer cors

### 4️⃣ (Opcional) Instalar nodemon para reinicio automático del servidor
- npm install --save-dev nodemon

### 5️⃣ Configurar script de inicio en package.json
- "scripts": {
    "start": "nodemon server.js"
  }


### 6️⃣ Iniciar el servidor
  node server.js

### 🌐 Acceder a la aplicación
- Una vez iniciado el servidor, abre tu navegador en:
  http://localhost:3000




### 🧩 Funcionamiento
## 🎛 Interfaz de Usuario

- Muestra un video en vivo de tu cámara web.
- Botón "📸 Tomar foto" para capturar una imagen del video.

### 🎯 Proceso de Captura
- Al hacer clic en el botón, se congela el frame actual del video.

- Se muestra una vista previa en la misma página.

La imagen es enviada automáticamente al servidor.

### 🖥️ Lado del Servidor
- Recibe la imagen vía POST y la guarda en la carpeta uploads/.

- Asigna un nombre único a cada imagen usando la hora actual (timestamp).

- Ejemplo: foto_1623456789.png