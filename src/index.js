const http = require('http');

const tarjetaRecarga = require("./dao/TarjetaRecarga.js");
const foto = require("./dao/Foto.js");
const producto = require("./dao/Producto.js");
const hostname = '127.0.0.1';
const port = 3000;

//tarjetaRecarga.crearTarjeta(1,100.00);
//tarjetaRecarga.borrarTarjeta(3);
//producto.crearProducto('Arduino',1,0,1,23,0);
//producto.obtenerTodos();
//producto.buscarPorId(1);
//producto.borrarProducto(1);
//foto.crearFoto("url");
var fotoObject = new Foto(0,'Hola');
foto.crearFoto(fotoObject);
//foto.actualizarFoto(3,"url1");
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

