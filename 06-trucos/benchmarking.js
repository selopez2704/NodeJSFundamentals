let suma = 0;
console.time('Bucle');
for (let i = 0; i < 1000000000; i++) {
    suma+=1;
}
console.timeEnd('Bucle');

const asincrona = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('termina el proceso asincrono');
            resolve();
        },10)
    })
}

console.time('Asincrono');

asincrona().then(() =>  console.timeEnd('Asincrono'))