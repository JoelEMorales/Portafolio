// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
app.use(cors());  // Permitir que el frontend se comunique con el backend

// Ruta para enviar las credenciales de EmailJS
app.get('/emailjs-credentials', (req, res) => {
    res.json({
        serviceID: process.env.EMAILJS_SERVICE_ID,
        templateID: process.env.EMAILJS_TEMPLATE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY
    });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});