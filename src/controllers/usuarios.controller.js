import {Usuario} from '../models/Usuario.js';

export const createUsuario = async (req, res) =>{
    try {
        const {celular, contrasena, correo, nombreApellidos} = req.body;

        const saldo = 0;
        const idFoto = null;

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
        res.json({error})
    }
}

export const getUsuarios = async (req, res) =>{
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios)
    } catch (error) {
        res.json({error})
    }
    
}

export const getUsuario = async(req, res) =>{
    const {idUsuario} = req.params;

    try {
        const usuario = await Usuario.findOne({
            where: {
                idUsuario,
            }
        });

        if(usuario == null){
            res.status(204);
            res.json();
        }else{
            res.json(usuario) 
        }

    } catch (error) {
        console.log(error);
        res.json({error})
    }    
}

export const updateUsuario = async(req,res) =>{
    const {idUsuario} = req.params;
    const usuario = await Usuario.findByPk(idUsuario);
    const {celular, contrasena, correo, nombreApellidos, saldo, idFoto} = req.body;

    if(usuario != null && saldo>0){
        usuario.celular = celular;
        usuario.contrasena = contrasena;
        usuario.correo = correo;
        usuario.nombreApellidos = nombreApellidos;
        usuario.saldo = saldo;
        usuario.idFoto = idFoto;
        await usuario.save();

        res.json(usuario);
    }else{
        res.json({error:"Usuario no existe o saldo es invalido"})
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