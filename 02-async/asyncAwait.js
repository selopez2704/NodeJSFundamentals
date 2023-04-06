const hola = async (nombre)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Hola, '+ nombre);
            resolve(nombre);
        },1500)
    })
}


const hablar = async (nombre)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Bla bla bla... ');
            resolve();
            // reject('Hay un error')
        },1000)
    })
}

const adios = async (nombre) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    } )
}

console.log('Iniciando el proceso')
const main = async () => {
    let nombre = await hola('sebas');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}
main()