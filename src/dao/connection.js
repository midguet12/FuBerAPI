var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "mysqluv2023.ddns.net",
    user: "uv",
    password: "Okmijn0798",
    database: 'fuberapi'
  });
  
con.connect(function(err) {
    if (err) throw err;
      console.log("Connected!");
      var sql = "show tables;";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
})