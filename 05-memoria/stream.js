const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data='';

let readableStream = fs.createReadStream(__dirname+'/archivo.txt');

readableStream.setEncoding('utf-8')
readableStream.on('data',function (chunk){
    data+=chunk
    // console.log(chunk);
})
readableStream.on('end',function (){
    // console.log(data)
})


// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')


// const Transform=stream.Transform;

// function Mayus (){
//     Transform.call(this);
// }

// util.inherits(Mayus, Transform);
// Mayus.prototype._transform = function(chunk,codif,cb){
//     chunkMayus=chunk.toString().toUppercase();
//     this.push(chunkMayus);
//     cb();
// }

// let mayus = new Mayus()
// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout);


function Mayus (chunk){
    return chunkMayus=chunk.toString().toUpperCase();
}

const  writableStream = fs.createWriteStream(__dirname+'/file2.txt');
readableStream.setEncoding('utf8');
readableStream.on('data', function(chunk) {
    writableStream.write(Mayus(chunk));
});
