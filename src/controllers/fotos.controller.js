import {Foto} from '../models/Foto.js';

export const createFoto = async (req, res) =>{
    try {
        const {url} = req.body;
        const newFoto = await Foto.create({
            url
        });
    res.json(newFoto)
    } catch (error) {
        console.log(error)
    }
}

export const getFotos = async (req, res) =>{
    const fotos = await Foto.findAll();
    res.json(fotos)
}

export const getFoto = async(req, res) =>{
    const {idFoto} = req.params;

    try {
        const foto = await Foto.findOne({
            where: {
                idFoto,
            }
        });
        res.json(foto)
    } catch (error) {
        console.log(error);
    }    
}

export const updateFoto = async(req,res) =>{
    try {
        const {idFoto} = req.params;
        const {url} = req.body;
        const foto = await Foto.findByPk(idFoto);
        foto.url=url;
        await foto.save();
        res.json(foto);
    } catch (error) {
        console.log(error);
    }
}

export const deleteFoto = async(req,res) => {
    try {
        const {idFoto} = req.params;

        await Foto.destroy({
            where: {
                idFoto,
            }
        });

        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}