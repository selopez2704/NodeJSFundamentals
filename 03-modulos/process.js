// const process = require('process');

process.on('beforeExit',() => {console.log('El proceso va a terminar')})
process.on('exit',() => {console.log('El proceso termino')})

process.on('uncaughtException',(err,origen) => {
    console.log('faltó capturar un error')
    console.log(err.message)
})

funcionQueNoExiste()
console.log('Si el error no se recoge, esto no sale')