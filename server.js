const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
app.use(cors());  // Permitir que el frontend se comunique con el backend

// Servir archivos estáticos desde las carpetas 'public/javascript' y 'public/static/css'
app.use('/javascript', express.static(path.join(__dirname, 'public/javascript')));
app.use('/static/css', express.static(path.join(__dirname, 'public/static/css')));

// Ruta para enviar las credenciales de EmailJS
app.get('/emailjs-credentials', (req, res) => {
    res.json({
        serviceID: process.env.EMAILJS_SERVICE_ID,
        templateID: process.env.EMAILJS_TEMPLATE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY
    });
});

// Servir el archivo index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejar rutas no definidas (ej. SPA routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor en el puerto definido en las variables de entorno o el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});