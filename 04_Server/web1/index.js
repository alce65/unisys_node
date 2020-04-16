// Cargamos el módulo http
const http = require('http')
const port = 3000

//Creamos el servidor Web

const server = http.createServer( (req, res) => {
    res.end('Hola Unisys')
})

// Arancamos el servidor
server.listen(port)
console.log('Escuchando en el puerto', port)