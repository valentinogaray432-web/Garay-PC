
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir los archivos de la página web
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
