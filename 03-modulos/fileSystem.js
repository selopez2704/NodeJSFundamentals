const fs = require ('fs').promises

const leerPromise = async (ruta) => {
    const data = await fs.readFile(ruta, { encoding: 'utf8' })
    return Buffer.from(data)
}
const escribirPromise = async (ruta, contenido) => {
    const data = await fs.writeFile(ruta, contenido)
    return data
}


const mainPromise = async (readFilename,writeFilename) => {
    // leer 
    data = await leerPromise(__dirname+'/'+readFilename)
    console.log( data.toString()) 

    // escribir 
    let contenido = 'Archivo nuevo';
    data = await escribirPromise(__dirname+'/'+writeFilename, contenido)
    console.log( data) 
}

let readFilename='file.txt';
let writeFilename='newFile.txt';
mainPromise(readFilename,writeFilename)