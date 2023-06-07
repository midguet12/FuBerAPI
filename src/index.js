import app from './app.js'
import {sequelize} from './database/database.js';

async function main(){
  try {
    await sequelize.sync()
    app.listen(4000)

  } catch (error) {
    console.log(error)
  }

}

main()
