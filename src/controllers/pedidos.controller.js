import {Pedido} from '../models/Pedido.js';

export const createPedido = async (req, res) =>{
    try {
        const {idPedido,idTienda,nombreUsuarioComprador} = req.body;
        const newPedido= await Pedido.create({
            idPedido,
            idTienda,
            nombreUsuarioComprador
        });
    res.json(newPedido)
    } catch (error) {
        console.log(error)
    }
}

export const getPedidos = async (req, res) =>{
    const pedidos = await Pedido.findAll();
    res.json(pedidos)
}

export const getPedido = async(req, res) =>{
    const {idPedido} = req.params;

    try {
        const pedido = await Pedido.findOne({
            where: {
                idPedido,
            }
        });
        res.json(pedido)
    } catch (error) {
        console.log(error);
    }    
}

export const updatePedido = async(req,res) =>{
    try {
        const {idPedido} = req.params;
        const {idTienda,nombreUsuarioComprador} = req.body;

        const pedido = await Pedido.findByPk(idPedido);
        pedido.idTienda = idTienda,
        pedido.nombreUsuarioComprador = nombreUsuarioComprador,

        await pedido.save();
        res.json(pedido);

    } catch (error) {
        console.log(error);
    }
}

export const deletePedido = async(req,res) => {
    try {
        const {idPedido} = req.params;

        await Pedido.destroy({
            where: {
                idPedido,
            }
        });
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}