const express = require('express');     // Indicamos que vamos a usar express en este proyecto
const app = express();                  // Usamos app como proxy de todas las clases y métodos de express
const PORT = 3000;

app.use(express.json());                // Instanciamos el método JSON para trabajar con ello en el proyecto

app.listen(PORT,()=> {
    console.log(`Servidor levantado en puerto ${PORT}`)
});

// ENDPOINTS

// Respond with Hello World! on the homepage
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Respond to POST request on the root route (/), the application’s home page
app.post('/', (req, res) => {
    res.send(`Hola ${req.body.nombre + ' ' + req.body.apellido} !!!`)
});

// Respond to a PUT request to the /user route
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

// Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});