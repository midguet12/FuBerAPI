import {TarjetaBancaria} from '../models/TarjetaBancaria.js';

export const createTarjetaBancaria = async (req, res) =>{
    try {
        const {numero, fechaVencimiento, idUsuario} = req.body;
        if (idUsuario>0) {
            const newTarjetaBancaria = await TarjetaBancaria.create({
                numero,
                fechaVencimiento,
                idUsuario
            });
            res.status(201).json(newTarjetaBancaria)
        } else {
            res.status(400).json({message: "Usuario invalido"});
        }
        
    } catch (error) {
        res.json({error:`${error}`})
        console.log(error)
    }
}

export const getTarjetasBancarias = async (req, res) =>{
    try{
        const tarjetasBancarias = await TarjetaBancaria.findAll();
        if(tarjetasBancarias!= null){
            res.json(tarjetasBancarias)
        }else{
            res.status(204).json();
        }
    } catch (error){
        res.json({error})
        console.log(error);
    }
}

export const getTarjetaBancaria = async(req, res) =>{
    const {numero} = req.params;

    try {
        const tarjetaBancaria = await TarjetaBancaria.findOne({
            where: {
                numero,
            }
        });
        if(tarjetaBancaria != null){
            res.json(numero)
        }else{
            res.status(204).json();
        }
    } catch (error) {
        console.log(error);
        res.json({error:`${error}`})
    }    
}

export const deleteTarjetaBancaria = async(req,res) => {
    try {
        const {numero} = req.params;
        const tarjetaBancaria = await tarjetaBancaria.findByPk(numero);
        if (tarjetaBancaria!=null) {
            await TarjetaBancaria.destroy({
                where: {
                    numero,
                }
            });
            return res.sendStatus(204);
        } else {
            return res.sendStatus(204);
        }
        
    } catch (error) {
        console.log(error)
        res.json({error:`${error}`})    
    }
}