// Cargamos el módulo http
const http = require('http')
const fs = require('fs')
const port = 3003

//Creamos el servidor Web

const server = http.createServer( (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end(err.message)
            return
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    } )
})

// Arancamos el servidor
server.listen(port)
console.log('Escuchando en el puerto', port)