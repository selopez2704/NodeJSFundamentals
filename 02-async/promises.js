const hola =(nombre)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Hola, '+ nombre);
            resolve(nombre);
        },1500)
    })
}


const hablar = (nombre)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Bla bla bla... ');
            // resolve();
            reject('Hay un error')
        },1000)
    })
}

const adios = (nombre) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    } )
}

console.log('Iniciando el proceso')
hola('sebas')
    .then((nombre)=>{return hablar(nombre)})
    .then((nombre) =>{
        return adios(nombre);
    } )
    .then((nombre) => {
        console.log('Terminado el proceso');
    }).catch((error) => {
        console.log(error)
        
    })