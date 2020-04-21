
export const app  = () => {
    console.log('Cargada la aplicación')
    console.log(io)

    const socket = io('http://localhost:3000/')

    socket.on('message', (msg) => {
        console.log(msg)
        console.log('Respondiendo')
        socket.emit('response', {user1: 'Saludos igualmente'})
    })
}