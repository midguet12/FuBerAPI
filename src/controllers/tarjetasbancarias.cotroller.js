import {TarjetaBancaria} from '../models/TarjetaBancaria.js';

export const createTarjetaBancaria = async (req, res) =>{
    try {
        const {numero, fechaVencimiento, idUsuario} = req.body;

        const newTarjetaBancaria = await TarjetaBancaria.create({
          numero,
          fechaVencimiento,
          idUsuario
        });

    res.json(newTarjetaBancaria)
    } catch (error) {
        res.json({error:"Numero de tarjeta ya registrado o  error en fecha"})
    }
}

export const getTarjetaSBancarias = async (req, res) =>{
    const tarjetasBancarias = await TarjetaBancaria.findAll();
    if(tarjetasBancarias != null){
        res.json(tarjetasBancarias)
    }else{
        res.json({error:"No hay ninguna tarjeta bancaria registrada"})
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

        }
        res.json(numero)
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