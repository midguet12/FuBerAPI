var mysql = require('mysql2');

  
/*con.connect(function(err) {
    if (err) throw err;
      console.log("Connected!");
      var sql = "show tables;";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
})*/



function getConnection(){

  let connection = mysql.createConnection({
    host: "mysqluv2023.ddns.net",
    user: "uv",
    password: "Okmijn0798",
    database: 'fuberapi'
  });

  return connection;
}

module.exports = {getConnection};
<<<<<<< HEAD
//Midguet esta trabajando
//Termine de trabajar
=======

//Agni trabaja en este dao
//agni termino de trabajar en este dao
>>>>>>> DAOZhircon
