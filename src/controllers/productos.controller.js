import {Producto} from '../models/Producto.js';

export const createProducto = async (req, res) =>{
    try {
        const {idFoto,descripcion,existencia} = req.body;
        const newProducto= await Producto.create({
            idFoto,
            descripcion,
            existencia
        });
    res.json(newProducto)
    } catch (error) {
        console.log(error)
    }
}

export const getProductos = async (req, res) =>{
    const productos = await Producto.findAll();
    res.json(productos)
}

export const getProducto = async(req, res) =>{
    const {idProducto} = req.params;

    try {
        const producto = await Producto.findOne({
            where: {
                idProducto,
            }
        });
        res.json(producto)
    } catch (error) {
        console.log(error);
    }    
}

export const updateProducto = async(req,res) =>{
    try {
        const {idProducto} = req.params;
        const {idFoto,descripcion,existencia} = req.body;

        const producto = await Producto.findByPk(idProducto);
        producto.idFoto = idFoto,
        producto.descripcion = descripcion,
        producto.existencia = existencia;

        await producto.save();
        res.json(producto);

    } catch (error) {
        console.log(error);
    }
}

export const deleteProducto = async(req,res) => {
    try {
        const {idProducto} = req.params;

        await Producto.destroy({
            where: {
                idProducto,
            }
        });
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}