import {Usuario} from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secret = process.env.SECRET;



export const createUsuario = async (req, res) =>{
    try {
        const {celular, contrasena, correo, nombreApellidos} = req.body;

        const saldo = 0;

        const newUsuario = await Usuario.create({
            celular,
            contrasena,
            correo,
            nombreApellidos,
            saldo
        });

        res.status(201).json(newUsuario)

    } catch (error) {
        res.json({error})
    }
}

export const getUsuarios = async (req, res) =>{
    
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        let usuarios = await Usuario.findAll();
        if (usuarios != null) {
            
            res.json(usuarios)
        } else {
            res.status(204).json();
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
            res.sendStatus(204);
            //res.json({message: "Prueba"});
            
        }else{
            res.json(usuario) 
        }

    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }    
}

export const autenticarUsuario = async(req,res) =>{
    console.log("autenticacion entrante")
    const {correo, contrasena} = req.params;
    try {
        const usuario = await Usuario.findOne({
            where: {
                correo,
            }
        });

        if (usuario.contrasena == contrasena) {
            const token = jwt.sign({
                correo,
                contrasena,
                exp: Date.now() + 86400 * 1000
            }, secret);
            console.log(token);
            res.json({
                token:`${token}`,
                usuario
            })
        }else{
            res.json({token:"no"})
        }


    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }
}

export const updateUsuario = async(req,res) =>{
    const {idUsuario} = req.params;
    const usuario = await Usuario.findByPk(idUsuario);
    const {celular, contrasena, correo, nombreApellidos, saldo} = req.body;

    if(usuario != null){
        if (saldo>0) {
            usuario.celular = celular;
            usuario.contrasena = contrasena;
            usuario.correo = correo;
            usuario.nombreApellidos = nombreApellidos;
            usuario.saldo = saldo;
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
        res.json({error:`${error}`})
    }
}

