// Cargamos el módulo http
const http = require('http')
const port = 3001

//Creamos el servidor Web

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<header><h1>Hola Unisys</h1></header>')
})

// Arancamos el servidor
server.listen(port)
console.log('Escuchando en el puerto', port)