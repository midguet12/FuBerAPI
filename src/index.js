const http = require('http');

const tarjetaRecarga = require("./dao/TarjetaRecarga.js");


const hostname = '127.0.0.1';
const port = 3000;

//tarjetaRecarga.crearTarjeta(1,100.00);
tarjetaRecarga.borrarTarjeta(3);


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

