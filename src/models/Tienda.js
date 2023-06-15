import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
export const Tienda = sequelize.define('Tienda',{
    idTienda:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull : true
    },
    idUsuario: {
        type:DataTypes.INTEGER,
        allowNull :false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:true
    }

},{
    freezeTableName: true,
    timestamps: false
})