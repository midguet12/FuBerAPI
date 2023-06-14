import {Foto} from '../models/Foto.js';

export const createFoto = async (req, res) =>{
    try {
        const {url} = req.body;
        if(validarURL(url)){
            const newFoto = await Foto.create({
                url
            });
            res.status(201).json(newFoto)
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getFotos = async (req, res) =>{
    try{
        const fotos = await Foto.findAll();
        if(fotos!=null){
            res.status(200).json(fotos)
        }else{
            res.status(204).json()
        }
    } catch (error){
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getFoto = async(req, res) =>{
    const {idFoto} = req.params;
    if(idFoto>0){
        try {
            const foto = await Foto.findOne({
                where: {
                    idFoto,
                }
            });
            if(foto!=null){
                res.json(foto)
            }else{
                res.status(204).json();
            }
        } catch (error) {
            res.json({error:`${error}`})
            console.log(error)
        }    
    }else{
        res.status(400).json({message: "Datos invalidos"});
    }
}

export const updateFoto = async(req,res) =>{
    try {
        const {idFoto} = req.params;
        const {url} = req.body;
        if(idFoto>0 && validarURL(url)){
            const foto = await Foto.findByPk(idFoto);
            if(foto!=null){
                foto.url=url;
                await foto.save();
                res.status(201).json(foto);
            }else{
                res.status(204).json();
            }
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const deleteFoto = async(req,res) => {
    try {
        const {idFoto} = req.params;
        if(idFoto > 0){
            if(await Foto.findByPk(idFoto) != null){
                await Foto.destroy({
                    where: {
                        idFoto,
                    }
                });
                res.status(200).json();
            }else{
                res.status(204).json();
            }
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

 
function validarURL(miurl) {
    try {
        new URL(miurl);
        return true;
    } catch (err) {
        return false;
    }
}