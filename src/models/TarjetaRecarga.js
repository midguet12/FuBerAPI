import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const TarjetaRecarga =  sequelize.define('TarjetaRecarga',{
    idTarjeta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTienda: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
        freezeTableName: true,
        timestamps: false
})