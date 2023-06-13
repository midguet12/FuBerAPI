import {Router} from 'express';
import {createTarjetaBancaria,deleteTarjetaBancaria,getTarjetaBancaria,getTarjetasBancarias} from '../controllers/tarjetasBancarias.controller.js'
const router = Router();

//Crear 
router.post('/tarjetabancaria', createTarjetaBancaria)
//Obtener grupal
router.get('/tarjetasbancarias', getTarjetaSBancarias)
//Obtener individual
router.get('/tarjetabancaria/:numero', getTarjetaBancaria);
//Eliminar 
router.delete('/tarjetabancaria/:numero', deleteTarjetaBancaria);



export default router;