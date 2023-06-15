import { INTEGER } from 'sequelize';
import {Foto} from '../models/Foto.js';

export const createFoto = async (req, res) =>{
    
    try {
        const newFoto = await Foto.create({});
        res.status(201).json(newFoto)
        
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getFotos = async (req, res) =>{
    try{
        const fotos = await Foto.findAll();
        if(fotos!= null){
            res.status(200).json(fotos)
        }else{
            res.status(204).json();
        }
    } catch (error){
        res.json({error})
        console.log(error);
    }
}

export const getFoto = async(req, res) =>{
    const {idFoto} = req.params;

    try {
        if(idFoto > 0){
            const foto = await Foto.findOne({
                where: {
                    idFoto,
                }
            });
            if(foto != null){
                res.status(200).json({url:`http://themaisonbleue.com:4080/${idFoto}.jpg`})
            }else{
                res.sendStatus(204);
            }
        }
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }    
}

export const updateFoto = async(req,res) =>{
    try {
        const {idFoto} = req.params;
        const {url} = req.body;
        if(idFoto>0){
            const foto = await Foto.findByPk(idFoto);
            if(foto != null ){
                if(url!=null ){
                    foto.url=url;
                    if (await foto.save() != null){
                        res.status(200).json(foto);
                    }else{
                        res.status(400).json(foto);
                    }
                }
            }else{
                res.sendStatus(204);
            }
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }

    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }
}
export const deleteFoto = async(req,res) => {
    try {
        const {idFoto} = req.params;
        
        if(idFoto>0){
            const foto = await Foto.findByPk(idFoto);
            if (foto!=null) {
                await Foto.destroy({
                    where: {
                        idFoto,
                    }
                });
                return res.sendStatus(200);
            } else {
                return res.sendStatus(204);
            }
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }

        
    } catch (error) {
        console.log(error)
        res.json({error:`${error}`})    
    }
}