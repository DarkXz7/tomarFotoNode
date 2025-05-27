const video = document.getElementById('video');      // Elemento video donde se muestra cámara
const canvas = document.getElementById('canvas');    // Canvas para capturar imagen
const preview = document.getElementById('preview');  // Imagen donde se muestra la foto tomada
const snap = document.getElementById('snap');        // Botón para tomar foto
const context = canvas.getContext('2d');             

// Función para iniciar cámara y mostrar video en pantalla
async function iniciarCamara() {
  try {
    // Solicitar acceso a la cámara del usuario
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream; // Asignar el stream al video para mostrarlo
  } catch (err) {
    alert('No se pudo acceder a la cámara: ' + err.message);
  }
}

iniciarCamara();

// Evento al hacer click en el botón "Tomar foto"
snap.addEventListener('click', () => {
  // Dibujar el frame actual del video en el canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Obtener imagen en formato base64 para vista previa
  const dataURL = canvas.toDataURL('image/png');
  preview.src = dataURL;

  // Convertir canvas a Blob para enviar como archivo
  canvas.toBlob(blob => {
    const formData = new FormData();
    formData.append('photo', blob, 'foto.png');

    // Enviar imagen al servidor vía POST
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(msg => alert(msg))   // Mostrar mensaje de éxito
    .catch(err => console.error('Error al subir la foto:', err));
  }, 'image/png');
});
