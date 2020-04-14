const fs = require('fs')

const data = fs.readFileSync('Prueba.txt', {encoding: 'utf-8'})
console.log(data)
console.log('Lectura de ficheros')

let data2 
fs.readFile('Prueba2.txt', {encoding: 'utf-8'}, (err, data)=> {
    if (err) {
        console.log(err)
        return
    }
    data2 = data
    console.log(data2)
})
console.log('Lectura de ficheros')