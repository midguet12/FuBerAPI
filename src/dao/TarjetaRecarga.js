const connection = require("../dao/connection.js")

/*const TarjetaRecarga = new Schema({
    idTienda: Number,
    monto: Number
});*/

class TarjetaRecarga{
    constructor(idTarjeta, idTienda, monto) {
        this.idTarjeta = idTarjeta,
        this.idTienda = idTienda,
        this.monto = monto
    }
}

function crearTarjeta(idTienda, monto){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = `INSERT INTO TarjetaRecarga (idTienda, monto) VALUES (${idTienda}, ${monto})`;

        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
}

/*function obtenerTarjeta(idTarjeta){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        dbConnection.query(`SELECT * FROM TarjetaRecarga where idTarjeta =${idTarjeta}`, function (err, result, fields) {
            if (err) throw err;
            //let tarjetaRecarga = new TarjetaRecarga(result[0].idTarjeta, result[0].idTienda, result[0].monto);
            //console.log(result[0].monto);
            let monto = result.monto;
            return 1;
        });
    });
}*/

function borrarTarjeta(idTarjeta){
    dbConnection = connection.getConnection();
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM TarjetaRecarga WHERE idTarjeta = ${idTarjeta}`;
        dbConnection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}


module.exports = {crearTarjeta, /*obtenerTarjeta,*/ borrarTarjeta}