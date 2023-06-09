import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
export const Producto = sequelize.define('Producto',{
    idProducto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idFoto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    existencia: {
        type: DataTypes.BOOLEAN,
        allowNull : true
    }
},{
    freezeTableName: true,
    timestamps: false
})