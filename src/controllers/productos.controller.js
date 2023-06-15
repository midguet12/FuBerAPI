import {Console} from 'console';
import {Producto} from '../models//Producto.js';

export const createProducto = async (req, res) =>{
    try {
        const {idFoto,descripcion,existencia} = req.body;
        if(idFoto>0){
            const newProducto = await Producto.create({
                idFoto,
                descripcion,
                existencia
            });
            if(newProducto != null){
                res.status(201).json(newProducto);
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

export const getProductos = async (req, res) =>{
    try{
        const productos = await Producto.findAll();
        if(productos != null){
            res.status(200).json(productos);
        }else{
            res.sendStatus(204).json();
        }
        
    }catch(error){
        res.json({mensage: `${error}`});
        console.log(error);
    }
}

export const getProducto = async(req, res) =>{
    const {idProducto} = req.params;
            try {
                if(idProducto>0){
                    const producto = await Producto.findOne({
                        where: {
                            idProducto,
                        }
                    });
                    if(producto!=null){
                        res.status(200).json(producto)
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
     

export const updateProducto = async(req,res) =>{
    try {
        const {idProducto} = req.params;
        const {idFoto,descripcion,existencia} = req.body;
        const producto = await Producto.findByPk(idProducto);
        if(producto != null ){
            if(idFoto > 0 ){
                producto.idFoto = idFoto;
                producto.descripcion = descripcion;
                producto.existencia = existencia;
                if (await producto.save() != null){
                    res.status(200).json(producto);
                }else{
                    res.status(400).json(producto);
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

export const deleteProducto = async(req,res) => {
    try {
        const {idProducto} = req.params;
        if(idProducto>0){
            await Producto.destroy({
                where: {
                    idProducto,
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