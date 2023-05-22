const connection = require('../dao/connection.js');

class Producto{
    constructor(idProducto,descripcion,existencia,idTienda,idUsuario,precio,idFoto){
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.existencia = existencia;
        this.idTienda = idTienda;
        this.idUsuario = idUsuario;
        this.precio = precio;
        this.idFoto = idFoto;
    }
}
function crearProducto(descripcion,existencia,idTienda,idUsuario,precio,idFoto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO Producto (descripcion, existencia, idTienda, idUsuario, precio, idFoto) VALUES('${descripcion}','${existencia}', '${idTienda}' ,'${idUsuario}','${precio}','${idFoto}')`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
}
function borrarProducto(idProducto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM Producto WHERE idProducto = ${idProducto}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
function obtenerTodos(){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        dbConnection.query("SELECT * FROM Producto", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
function buscarPorId(idProducto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM Producto WHERE  ${idProducto}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
module.exports = {crearProducto,borrarProducto,obtenerTodos,buscarPorId}