class PruebaThisES6 {
    constructor(name) {
        this.name = name
        console.log(this)
        setTimeout( function () {
            console.log(this)
        }, 1000)
        setTimeout( function () {
            console.log('Usando bind', this)
        }.bind(this), 1000),
        setTimeout( () => {
            console.log('arrow', this)
        }, 1000)
    }

    saludar() {
        console.log(`Hola soy ${this.name}`)
    }
}

const pb1 = new PruebaThisES6('uno')
pb1.saludar()
console.log(pb1)