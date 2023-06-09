import {Router} from 'express';
import {createTarjetaBancaria,deleteTarjetaBancaria,getTarjetaBancaria,getTarjetasBancarias} from '../controllers/tarjetasbancarias.cotroller.js'
const router = Router();

//Crear 
router.post('/tarjetabancaria', createTarjetaBancaria)
//Obtener grupal
router.get('/tarjetasbancarias', getTarjetasBancarias)
//Obtener individual
router.get('/tarjetabancaria/:numero', getTarjetaBancaria);
//Eliminar 
router.put('/tarjetabancaria/:numero', deleteTarjetaBancaria);



export default router;