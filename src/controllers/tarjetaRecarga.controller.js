import {TarjetaRecarga} from '../models/TarjetaRecarga.js';

export const createTarjeta = async (req, res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTienda,monto} = req.body;
        if (monto>0) {
            const newTarjeta = await TarjetaRecarga.create({
                idTienda,
                monto
            });
            res.status(201).json(newTarjeta);
        } else {
            res.status(400).json({message: "Monto invalido"});
        }
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getTarjeta = async(req, res) =>{
    const {idTarjeta} = req.params;

    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const tarjeta = await TarjetaRecarga.findOne({
            where: {
                idTarjeta,
            }
        });
        res.json(tarjeta)
    } catch (error) {
        console.log(error);
    }    
}

export const updateTarjeta = async(req,res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTarjeta} = req.params;
        const {idTienda, monto} = req.body;

        const tarjeta = await TarjetaRecarga.findByPk(idTarjeta);
        tarjeta.idTienda = idTienda;
        tarjeta.monto = monto;

        await tarjeta.save();
        res.json(tarjeta);

    } catch (error) {
        console.log(error);
    }
}

export const updateMonto = async(req,res) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTarjeta} = req.params;
        const {monto} = req.body;

        const tarjeta = await TarjetaRecarga.findByPk(idTarjeta);
        tarjeta.monto = monto;

        await tarjeta.save();
        res.json(tarjeta);

    } catch (error) {
        console.log(error);
    }
}

export const deleteTarjeta = async(req,res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"}) 
        }
        const {idTarjeta} = req.params;

        await TarjetaRecarga.destroy({
            where: {
                idTarjeta,
            }
        });

        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}