// Cargamos el módulo http
const http = require('http')
const port = 3000

//Creamos el servidor Web

const server = http.createServer( (req, res) => {
    res.end('Servidor Socket.IO')
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('Socket conectado')
    socket.emit('message', {server: 'Saludos'})
    socket.on('response', (data) => {
        console.log(data)
    })
})

// Arancamos el servidor
server.listen(port)
console.log('Escuchando en el puerto', port)