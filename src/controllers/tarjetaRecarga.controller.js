import {TarjetaRecarga} from '../models/TarjetaRecarga.js';
//import {Tienda} from '../models/' IMPORTAR TIENDA
export const createTarjeta = async (req, res) =>{
    try {
        const {idTienda,monto} = req.body;
        if(idTienda>0 && monto>0){
            //PONER UNA VALIDACION SI EXISTE LA TIENDA
            //await Tienda.findByPk(idTienda) != null
            const newTarjeta = await TarjetaRecarga.create({
                idTienda,
                monto
            });
            res.status(201).json(newTarjeta)
        }else{
            res.status(400).json({message: "Datos invalidos"});
        }

    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getTarjeta = async(req, res) =>{
    const {idTarjeta} = req.params;
    if(idTarjeta>0){
        try {
            const tarjeta = await TarjetaRecarga.findOne({
                where: {
                    idTarjeta,
                }
            });
            if(tarjeta != null){
                res.status(200).json(tarjeta)
            }else{
                res.status(204).json()
            }
        } catch (error) {
            res.json({error:`${error}`})
            console.log(error)
        }    

    }else{
        res.status(400).json({message: "Datos invalidos"});
    }
}

export const updateTarjeta = async(req,res) =>{
    try {
        const {idTarjeta} = req.params;
        const {idTienda, monto} = req.body;

        if(idTarjeta>0 && idTarjeta>0){
            const tarjeta = await TarjetaRecarga.findByPk(idTarjeta);
            if(tarjeta!=null){
                tarjeta.idTienda = idTienda;
                tarjeta.monto = monto;
        
                await tarjeta.save();
                res.status(201).json(tarjeta);
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

export const updateMonto = async(req,res) =>{
    try {
        const {idTarjeta} = req.params;
        const {monto} = req.body;

        if(idTarjeta>0 && monto>0){
            const tarjeta = await TarjetaRecarga.findByPk(idTarjeta);
            if(tarjeta!=null){
                tarjeta.monto += monto;
        
                await tarjeta.save();
                res.status(201).json(tarjeta);
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

export const deleteTarjeta = async(req,res) => {
    try {
        const {idTarjeta} = req.params;

        if(idTarjeta > 0){
            if(await TarjetaRecarga.findByPk(idTarjeta) != null){
                await TarjetaRecarga.destroy({
                    where: {
                        idTarjeta,
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