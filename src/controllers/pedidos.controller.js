import {Pedido} from '../models/Pedido.js';

export const createPedido = async (req, res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTienda,idUsuarioComprador, idUsuarioVendedor} = req.body;
        if (idTienda>0 && idUsuarioComprador>0 && idUsuarioVendedor>0) {
            const newPedido= await Pedido.create({
                idTienda,
                idUsuarioComprador,
                idUsuarioVendedor
            });
            res.status(201).json(newPedido)
        } else {
            res.status(400).json({message: "Datos invalidos"});
        }

    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getPedidos = async (req, res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const pedidos = await Pedido.findAll();
        if(pedidos !=null){
            res.json(pedidos)
        }else{
            res.status(204).json();
        }
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
    
}

export const getPedido = async(req, res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idPedido} = req.params;
        const pedido = await Pedido.findOne({
            where: {
                idPedido,
            }
        });

        if (pedido!=null) {
            res.status(200).json(pedido);
        } else {
            res.status(204).json()
        }
        
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }    
}

export const updatePedido = async(req,res) =>{
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);
    if (Date.now > payload.exp) {
        return res.status({error: "token expirado"}) 
    }
    const {idPedido} = req.params;
    let pedido = await Pedido.findByPk(idPedido);
    const {idTienda,idUsuarioComprador, idUsuarioVendedor} = req.body;
    try { 
        if (pedido!=null) {
            if (idTienda>0 && idUsuarioComprador>0 && idUsuarioVendedor>0) {

                pedido.idTienda = idTienda;
                pedido.idUsuarioComprador = idUsuarioComprador;
                pedido.idUsuarioVendedor = idUsuarioVendedor;
            
                await pedido.save();
                res.status(201).json(pedido)
            } else {
                res.status(400).json({message: "Datos invalidos"});
            }
        } else {
            res.status(204).json();
        } 

    } catch (error) {
        console.log(error);
        res.json({error:`${error}`});

    }
}

export const deletePedido = async(req,res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idPedido} = req.params;
        const pedido = await Pedido.findByPk(idPedido);
        
        if (pedido!=null) {
            await Pedido.destroy({
                where: {
                    idPedido,
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