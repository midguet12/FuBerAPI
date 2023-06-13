import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const TarjetaBancaria =  sequelize.define('TarjetaBancaria',{
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE, 
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
        freezeTableName: true,
        timestamps: false
})