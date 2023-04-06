let enVar = process.env.ENVVAR || 'default 1';
let enVar2 = process.env.ENVVAR2 || 'default 2';

console.log("Hola "+ enVar)
console.log("Segunda variable "+ enVar2)


// in console: ENVVAR=Sebastian ENVVAR2=Lopez node concepts/02-entorno/entorno.js