import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const secret = process.env.SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


import {Usuario} from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import clientx from 'twilio'
const client = require('twilio')(accountSid, authToken);


export const obtenerOTP = async(req,res) =>{
    const {celular} = req.params
    const otp = getRandomIntInclusive(100000,999999);
    console.log(otp)
    try {
        client.messages
            .create({
                body: `Hola, me llamo Fuborcito, este es tu codigo de verificacion: ${otp}`,
                from: '+12545664494',
                to: celular
            })
            .then(message => console.log(message.sid));
        res.json(otp);    
    } catch (error) {
        console.log(error)
    }
}

function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export const createUsuario = async (req, res) =>{
    try {
        client.messages
            .create({
                body: 'Hola, me llamo Fuborcito, este es tu codigo de verificacion',
                from: '+12545664494',
                to: '+529982935090'
            })
            .then(message => console.log(message.sid));
    } catch (error) {
        console.log(error)
    }
    /*try {
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
    }*/
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

