const connection = require("../dao/connection.js");

class Usuario{
    constructor(idUsuario,celular,contrasena,correo,nombreApellidos,saldo,idFoto){
        this.idUsuario = idUsuario;
        this.celular = celular;
        this.contrasena = contrasena;
        this.correo = correo;
        this.nombreApellidos = nombreApellidos;
        this.saldo = saldo;
        this.idFoto = idFoto;
    }
}
function crearUsuario(celular,contrasena,correo,nombreApellidos){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO Usuario (celular, contrasena, correo, nombreApellidos) VALUES('${celular}','${contrasena}', '${correo}' ,'${nombreApellidos}')`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}

function añadirFotoAUsuario(correo, idFoto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `UPDATE Usuario SET idFoto = '${idFoto}' WHERE correo = '${correo}'`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}

function borrarUsuario(correo){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM Usuario WHERE correo = ${correo}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
function verificaCredenciales(correo,contrasena){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT * FROM Producto WHERE  correo = ${correo} AND contrasena =  ${contrasena}`;
        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}
module.exports = {crearUsuario,añadirFotoAUsuario,borrarUsuario,verificaCredenciales}