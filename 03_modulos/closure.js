function crearUser(nombre) {
    let edad = 23
    return {
        getNombre () {
            return nombre
        },
        getEdad () {
            return edad
        },
        saludar() {
            console.log(`Hola soy ${nombre} y tengo ${edad} años`)
        }
    }
}

const user1 = crearUser('Juan')
console.log(user1)
user1.saludar()

const user2 = crearUser('Pedro')
console.log(user2)
setTimeout(()=>{user2.saludar()}, 1000)

