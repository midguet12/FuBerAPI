import {Router} from 'express';
import {createTarjeta,getTarjeta,updateTarjeta,updateMonto,deleteTarjeta} from '../controllers/tarjetaRecarga.controller.js'
const router = Router();

//Crear 
router.post('/tarjeta/:monto&:celular', createTarjeta);
//Obtener individual
router.get('/tarjeta/:idTarjeta', getTarjeta);
//Actualizar toda la tarjeta
//router.put('/tarjeta/:idTarjeta', updateTarjeta);
//Actualizar monto de tarjeta
router.put('/tarjeta/:idTarjeta', updateMonto);
//Eliminar
router.delete('/tarjeta/:idTarjeta', deleteTarjeta)


export default router;