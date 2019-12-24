const express = require('express');
// Déclatarion de mes constantes
const PORT = 2020;
const HOST = '127.0.0.1';

// Ici c'est l'application 
const app = express();
app.get('/', (req, res) => {
    res.send('Mon premier micro-service en node js\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);