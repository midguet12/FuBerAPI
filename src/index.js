const http = require('http');

const tarjetaRecarga = require("./dao/TarjetaRecarga.js");
const foto = require("./dao/Foto.js");

const hostname = '127.0.0.1';
const port = 3000;

//tarjetaRecarga.crearTarjeta(1,100.00);
//tarjetaRecarga.borrarTarjeta(3);
var url ="https://la_piedrita.jpg";


//foto.crearFoto(url);
//foto.obtenerTodas();
//foto.buscarPorId(2);
//foto.borrarFoto(2);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

