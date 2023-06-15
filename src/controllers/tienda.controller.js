
import {Tienda} from '../models/Tienda.js';
export const createTienda = async (req, res) =>{
    try {
        const {celular,direccion,idUsuario,nombre, idFoto} = req.body;
        if(idUsuario>0){
            const newTienda = await Tienda.create({
                celular,
                direccion,
                idUsuario,
                nombre,
                idFoto
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
    try{
        const tiendas = await Tienda.findAll();
        if(tiendas != null){
            res.status(200).json(tiendas);
        }else{
            res.sendStatus(204).json();
        }
        
    }catch(error){
        res.json({mensage: `${error}`});
        console.log(error);
    }
}

export const getTienda = async(req, res) =>{
    const {idTienda} = req.params;
            try {
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
     

export const updateTienda = async(req,res) =>{
    try {
        const {idTienda} = req.params;
        const {celular,direccion,idUsuario,nombre, idFoto} = req.body;
        const tienda = await Tienda.findByPk(idTienda);
        if(tienda != null ){
            if(idUsuario > 0 ){
                tienda.idTienda = idTienda
                tienda.celular = celular,
                tienda.direccion = direccion,
                tienda.idUsuario = idUsuario,
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