const { exec, spawn } = require('child_process');
const { stdout } = require('process');

// exec('dir',(err,stdout,sterr)=>{
//     if(err){
//         console.log(err);
//         return false
//     }
//     console.log(stdout)

// })


let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data',function(dato){
    console.log(process.killed)
    console.log(dato.toString())
})
proceso.on('exit',function(){
    console.log('El proceso terminó')
})