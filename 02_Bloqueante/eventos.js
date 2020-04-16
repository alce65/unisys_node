const EventEmitter = require('events')
const emisor = new EventEmitter()

const telefono = (ev = {}) => {
    // if( ev && ev.tipo === 'pro') {
    if( ev.tipo === 'pro') {
        console.log('Ring, Ring, Ring')
    } else {
        console.log('Ring, Ring')
    }
}

// emisor.on('telefonear', (ev = {}) => {
emisor.addListener('telefonear', telefono)

emisor.once('telefonear', () => {
    console.log('Brr, Brr')
})

emisor.emit('telefonear')
emisor.emit('telefonear')
emisor.emit('telefonear', {tipo: 'pro'})

// emisor.off('telefonear', telefono)
emisor.removeListener('telefonear', telefono)
emisor.emit('telefonear')