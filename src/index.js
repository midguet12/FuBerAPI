import {sequelize}  from "./database/database.js";
import app from './app.js'
async function main(){
  try {
    await sequelize.authenticate();
    console.log('La conexion se hizo satisfactoriamente');
    app.listen(4000);
    console.log('Server is working on port', 4000);
  } catch (error) {
    console.error("Unable to connect to database:", error)
  }
}

main();



/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/