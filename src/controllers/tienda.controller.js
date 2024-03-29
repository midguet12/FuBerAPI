
import {Tienda} from '../models/Tienda.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
const secret = process.env.SECRET;

export const createTienda = async (req, res) =>{

    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        const {direccion,idUsuario,nombre} = req.body;
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        if(idUsuario>0){
            const newTienda = await Tienda.create({
                direccion,
                idUsuario,
                nombre
            });
            if(newTienda != null){
                
                res.status(201).json(newTienda);
            }else{
                res.status(400).json({message:"Datos invalido"});
            }
        }else{
            res.status(400);
            res.json({message:"Datos invalidos"});
        }
    } catch (error) {
        res.send({error:`${error}`});
        res.status(500);
    }
}

export const getTiendas = async (req, res) =>{
    //console.log(req.headers.authorization.split(" ")[1]);
    try{
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const tiendas = await Tienda.findAll();
        if(tiendas != null){
            //console.log(tiendas)
            res.status(200).json(tiendas);
        }else{
            res.sendStatus(204).json();
        }
        
    }catch(error){
        console.log(error);
        res.json({mensage: `${error}`});
        
    }
}

export const getTiendaPorIdUsuario = async(req, res) =>{
    const {idUsuario} = req.params;
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        if (idUsuario>0) {
            const tienda = await Tienda.findOne({
                where:{
                    idUsuario
                }
            })
            if(tienda!=null){
                res.status(200).json(tienda)
            }else{
                res.sendStatus(204);
            }
        }
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`});
    }

}

export const getTienda = async(req, res) =>{
    const {idTienda} = req.params;
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        if(idTienda>0){
            const tienda = await Tienda.findOne({
                where: {
                    idTienda,
                }
            });
            if(tienda!=null){
                res.status(200).json(tienda)
            }else{
                res.sendStatus(204);
            }
        }else{
            res.status(400);
            res.json({message: "Datos invalidos"});
        }

            
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`});
    }    
}

export const getFotoTienda = (req, res) =>{
    const {idTienda} = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);
    if (Date.now > payload.exp) {
        return res.status({error: "token expirado"}) 
    }
    res.json(`http://themaisonbleue.com:4080/tienda/${idTienda}.jpg`)
}

export const updateTienda = async(req,res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTienda} = req.params;
        const {direccion,idUsuario,nombre} = req.body;
        const tienda = await Tienda.findByPk(idTienda);
        
        if(tienda != null ){
            if(idUsuario > 0 ){
                tienda.idTienda = idTienda;
                tienda.direccion = direccion;
                tienda.idUsuario = idUsuario;
                tienda.nombre = nombre;
                if (await tienda.save() != null){
                    res.status(200).json(tienda);
                }else{
                    res.status(400).json(tienda);
                }
            }else{
                res.status(400).json({message:"Datos invalidos"});
            }
        }else{
            res.sendStatus(204);
        }
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }
}

export const deleteTienda = async(req,res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTienda} = req.params;
        if(idTienda>0){
            await Tienda.destroy({
                where: {
                    idTienda,
                }
            });
            return res.sendStatus(200);
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }

    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }
}