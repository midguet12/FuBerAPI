import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const Pedido =  sequelize.define('Pedido',{
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    idTienda: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    nombreUsuarioComprador: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
},{
        freezeTableName: true,
        timestamps: false
})