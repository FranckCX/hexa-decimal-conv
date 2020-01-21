const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer();
server.on('request',(request,response,next)=>{
fs.readFile('index.html',(error,data)=>{
    if(!error){
    response.write(data);
    response.end();
    }else{
    response.writeHead(404,{'content-type':'text/html; charset=utf-8'});
    response.write('le fichier rechercher n\'existe pas');
    response.end();
    }
});
});
server.listen(port,()=>{
console.log(`Votre serveur est en écoute sur le port ${port}`);
});