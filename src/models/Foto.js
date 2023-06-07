import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
export const Usuario = sequelize.define('Foto',{
    idFoto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
})