import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
export const Usuario = sequelize.define('Producto',{
    idFoto:{
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
    }
},{
    freezeTableName: true,
    timestamps: false
})