import {TarjetaBancaria} from '../models/TarjetaBancaria.js';

export const createTarjetaBancaria = async (req, res) =>{
    try {
        const {numero, fechaVencimiento, idUsuario} = req.body;
        const newTarjetaBancaria = await TarjetaBancaria.create({
          numero,
          fechaVencimiento,
          idUsuario
        });
    res.status(201).json(newTarjetaBancaria)
    } catch (error) {
        res.json({error})
    }
}

export const getTarjetasBancarias = async (req, res) =>{
    try{
        let tarjetasBancarias = await TarjetaBancaria.findAll();
        if(tarjetasBancarias == null){
            res.status(204).json();
        }else{
            res.json(tarjetasBancarias)
        }
    } catch (error){
        res.json({error})
        console.log(error);
    }
}

export const getTarjetaBancaria = async(req, res) =>{
    const {numero} = req.params;

    try {
        const tarjetaB = await TarjetaBancaria.findOne({
            where: {
                numero,
            }
        });
        if(tarjetaB == null){
            res.status(204).json();
        }else{
            res.json(numero)
        }
    } catch (error) {
        console.log(error);
        res.json({error:"No hay ninguna tarjeta bancaria registrada con ese numero"})
    }    
}

export const deleteTarjetaBancaria = async(req,res) => {
    try {
        const {numero} = req.params;
        await TarjetaBancaria.destroy({
            where: {
                numero,
            }
        });
        return res.sendStatus(204);
    } catch (error) {
        res.json({error:"No hay ninguna tarjeta bancaria registrada para borrar con ese id"})
    }
}