const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
    res.send('Hola Mundo desde Express....')
})

app.get('/user/:name',  (req, res, next) => {

    // let user = req.param('name') ? req.param('name') : 'usuario....'
    let user = req.params.name ? req.params.name : 'usuario....'
    res.send(`Hola ${user}`)
})

app.get('*',(req, res, next) => {
    console.log(req.params)
    res.send('Aqui no hay nada')
} )



app.listen(port, () => {
    console.log('Escuchando en el puerto', port)
})