import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const Usuario = sequelize.define('Usuario',{
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nombreApellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    saldo: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
})