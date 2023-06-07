import Sequelize from 'sequelize';

export const sequelize = new Sequelize('fuberapi', 'uv', 'Okmijn0798', {
  host: 'mysqluv2023.ddns.net',
  dialect: 'mysql'

});


/*var mysql = require('mysql2');



function getConnection(){

  let connection = mysql.createConnection({
    host: "mysqluv2023.ddns.net",
    user: "uv",
    password: "Okmijn0798",
    database: 'fuberapi'
  });

  return connection;
}*/
//Midguet esta trabajando
//Termine de trabajar