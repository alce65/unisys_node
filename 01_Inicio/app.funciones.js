let x
const ob = {}
ob.name = 'Pepe'

console.log(suma(3, 8))

function suma (a = 0, b = 0) {
    return a+b
}

const resta = function (a = 0, b = 0) {
    return a-b
}
console.log(resta(3, 8))


// ES 6
// const prod = (a = 1, b = 1) => { return a * b}
const prod = (a = 1, b = 1) => a * b
console.log(prod(4, 6))

const cuad = a => a*a
console.log(cuad(3))

cuad.desc = "Calcula el cuadrado" 
console.log(cuad.desc)
setTimeout(()=>{
    console.log(suma(13,6))
}, 1000)