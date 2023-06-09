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
        console.log(error)
    }
}

export const getTarjetaSBancarias = async (req, res) =>{
    const tarjetasBancarias = await TarjetaBancaria.findAll();
    res.json(tarjetasBancarias)
}

export const getTarjetaBancaria = async(req, res) =>{
    const {numero} = req.params;

    try {
        const numeros = await TarjetaBancaria.findOne({
            where: {
                numero,
            }
        });
        res.json(numeros)
    } catch (error) {
        console.log(error);
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
        console.log(error)
    }
}