
// function crearCuadrado() 

crearCuadrado = function (r) {
    return {
        area: function () {
            return (r * r).toFixed(2)
        },
        
        peri: () => {
            return (4 * r).toFixed(2)
        }
    }
}

module.exports = crearCuadrado