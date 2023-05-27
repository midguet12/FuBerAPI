const connection = require("../dao/connection.js");

class Foto{
    constructor(idFoto,url){
        this.idFoto = idFoto;
        this.url = url;
    }
}
function crearFoto(url){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO Foto(url) VALUES(' ${url} ')`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
}
function borrarFoto(idFoto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM Foto WHERE idFoto = ${idFoto}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
function obtenerTodas(){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        dbConnection.query("SELECT * FROM Foto", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
function buscarPorId(idFoto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM Foto WHERE  ${idFoto}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
module.exports = {crearFoto,borrarFoto,obtenerTodas,buscarPorId}
