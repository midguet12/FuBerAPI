import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const Producto = sequelize.define('Producto',{
    idProducto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    existencia: {
        type: DataTypes.BOOLEAN,
        allowNull : true
    },
    idTienda:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    precio:{
        type: DataTypes.FLOAT,
        allowNull: true
    },
    idFoto:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:true
    }  
},{
    freezeTableName: true,
    timestamps: false
})