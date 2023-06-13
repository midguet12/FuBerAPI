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

        res.status(201).json(newUsuario)

    } catch (error) {
        res.json({error})
    }
}

export const getUsuarios = async (req, res) =>{
    try {
        let usuarios = await Usuario.findAll();
        //usuarios = null;

        if (usuarios == null) {
            res.status(204).json();
            //res.json({error:"sin usuarios"})
        } else {
            res.json(usuarios)
        }

        
    } catch (error) {
        res.json({error})
        console.log(error);
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
            res.status(204).json();
            //res.json({message: "Prueba"});
            
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

    if(usuario != null){
        if (saldo>0) {
            usuario.celular = celular;
            usuario.contrasena = contrasena;
            usuario.correo = correo;
            usuario.nombreApellidos = nombreApellidos;
            usuario.saldo = saldo;
            usuario.idFoto = idFoto;
            await usuario.save();
            res.json(usuario);
        } else {
            
            res.status(400);
            res.json({message: "Saldo es menor que cero"});
        }
        
    }else{
        res.status(204);
        //res.json({message:"Usuario no existe"})
    }    
}

export const deleteUsuario = async(req,res) => {
    try {
        const {idUsuario} = req.params;
        const usuario = await Usuario.findByPk(idUsuario);

        if(usuario!=null){
            await Usuario.destroy({
                where: {
                    idUsuario,
                }
            });
            return res.sendStatus(200);
        } else {
            return res.sendStatus(204);
        }

        
        
    } catch (error) {
        console.log(error)
        res.json({message:error})
    }
}