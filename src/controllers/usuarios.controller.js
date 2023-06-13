import {Usuario} from '../models/Usuario.js';

export const createUsuario = async (req, res) =>{
    try {
        const {celular, contrasena, correo, nombreApellidos, saldo, idFoto} = req.body;

        const newUsuario = await Usuario.create({
            celular,
            contrasena,
            correo,
            nombreApellidos,
            saldo,
            idFoto
        });

    res.json(newUsuario)
    } catch (error) {
        res.json({error:"Numero de tarjeta ya registrado"})
    }
}

export const getUsuarios = async (req, res) =>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
}

export const getUsuario = async(req, res) =>{
    const {idUsuario} = req.params;

    try {
        const usuario = await Usuario.findOne({
            where: {
                idUsuario,
            }
        });
        res.json(usuario)
    } catch (error) {
        console.log(error);
    }    
}

export const updateUsuario = async(req,res) =>{
    try {
        const {idUsuario} = req.params;
        const {celular, contrasena, correo, nombreApellidos, saldo, idFoto} = req.body;

        const usuario = await Usuario.findByPk(idUsuario);
        usuario.celular = celular;
        usuario.contrasena = contrasena;
        usuario.correo = correo;
        usuario.nombreApellidos = nombreApellidos;
        usuario.saldo = saldo;
        usuario.idFoto = idFoto;

        await usuario.save();
        res.json(usuario);

    } catch (error) {
        console.log(error);
    }
}

export const deleteUsuario = async(req,res) => {
    try {
        const {idUsuario} = req.params;

        await Usuario.destroy({
            where: {
                idUsuario,
            }
        });

        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}