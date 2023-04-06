const hola =(nombre, callback)=>{
    setTimeout(()=>{
        console.log('Hola, '+ nombre);
        callback(nombre);
    },1500)
}


const hablar = (callback)=>{
    setTimeout(() => {
        console.log('Bla bla bla');
        callback();
    },1000)
}

const adios = (nombre,callback) => {
    setTimeout(() => {
        console.log('Adios', nombre);
        callback();
    }, 1000);
}


const conversacion = (nombre, veces, callback) => {
    if(veces>0){
        hablar(() => {
            conversacion(nombre,--veces,callback);
        })
    } else{
        adios(nombre,callback);
    }

}


console.log('iniciando proceso...')
hola("Sebastian", (nombre) => {conversacion(nombre,3,() => {console.log('proceso terminado...')})})