const c = require('./circulo.js')
/* const cu6 = require('./cuadrado.js')(6)
const cu8 = require('./cuadrado.js')(8) */

const cuadrado = require('./cuadrado.js')

const cu6 = cuadrado(6)
const cu8 = cuadrado(8)

const r = 5
console.log('El area del circulo es', c.area(r))
console.log('La circunferencia es', c.circunf(r))

console.log('El area del cuadrado 6 es', cu6.area())
console.log('El perimetro del cuadrado 6 es', cu6.peri())

console.log('El area del cuadrado 8 es', cu8.area())
console.log('El perimetro del cuadrado 8 es', cu8.peri())