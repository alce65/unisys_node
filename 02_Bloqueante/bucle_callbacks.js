const lineas = ['Linea 1', 'Linea 2', 'Linea 3', 'Linea 4']
let n = 0

function mostrarLuego(t, txt, callback) {
    setTimeout(() => {
        console.log(txt)
        callback()
    },t)
}

// bucle asíncrono en serie
serie = (time, textos, mainFunction, finalCallback) => {
    if (n === textos.length) {
        finalCallback()
        return
    } 
    mostrarLuego(time, textos[n], () => {
        serie(time, textos, mainFunction, finalCallback)
    })
    n++
}

console.log('Inicio')
serie(1000, lineas, mostrarLuego,  () => {
    console.log('Fin')
})
