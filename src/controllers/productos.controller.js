import {Console} from 'console';
import {Producto} from '../models/Producto.js';

export const createProducto = async (req, res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {descripcion,existencia,idTienda,precio,titulo} = req.body;
        if(idFoto>0 && existencia>0 && idTienda>0 && precio>0){
            const newProducto = await Producto.create({
                descripcion,
                existencia,
                idTienda,
                precio,
                titulo
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
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const productos = await Producto.findAll();

        if(productos != null){
            res.status(200).json(productos);
            console.log(productos)
        }else{
            res.sendStatus(204).json();
        }
        
    }catch(error){
        res.json({mensage: `${error}`});
        console.log(error);
    }
}

export const getProducto = async(req, res) =>{
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);
    if (Date.now > payload.exp) {
        return res.status({error: "token expirado"}) 
    }
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
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idProducto} = req.params;
        const {descripcion,existencia,idTienda,precio,titulo} = req.body;
        const producto = await Producto.findByPk(idProducto);
        if(producto != null ){
            if(idFoto > 0 ){
                producto.idProducto = idProducto;
                producto.descripcion = descripcion;
                producto.existencia = existencia;
                producto.idTienda = idTienda;
                producto.precio = precio;
                producto.titulo = titulo;
                
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
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
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