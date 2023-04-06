const http = require('http');


const router =(request, response) => {
    console.log('Nueva Peticion');
    console.log(request.url);

    switch(request.url){
        case'/hola':
            response.write('Hola Que tal?');
            response.end();
            break;
        default:
            response.write('Error 404: No se lo que quieres');
            response.end();


    }
    // response.writeHead(201,{'Content-Type':'text/plain'});
    // response.write('Hola desde http Node JS');
    // response.end();
}
http.createServer(router).listen(3000);

console.log('Escuchando en el puerto 3000');