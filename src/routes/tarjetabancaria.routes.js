import {Router} from 'express';
import {createTarjetaBancaria,deleteTarjetaBancaria,getTarjetaBancaria,getTarjetasBancarias} from '../controllers/tarjetasBancaria.controller.js'
const router = Router();

//Crear 
router.post('/tarjetabancaria', createTarjetaBancaria)
//Obtener grupal
router.get('/tarjetasbancarias', getTarjetasBancarias)
//Obtener individual
router.get('/tarjetabancaria/:numero', getTarjetaBancaria);
//Eliminar 
router.delete('/tarjetabancaria/:numero', deleteTarjetaBancaria);

export default router;