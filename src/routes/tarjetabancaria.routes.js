import {Router} from 'xpress';
import {createTarjetaBancaria,deleteTarjetaBancaria,getTarjetaBancaria,getTarjetaSBancarias} from '../controllers/tarjetasbancarias.cotroller.js'
const router = Router();

//Crear 
router.post('/tarjetabancaria', createTarjetaBancaria)
//Obtener grupal
router.get('/tarjetasbancarias', getTarjetaSBancarias)
//Obtener individual
router.get('/tarjetabancaria/:numero', getTarjetaBancaria);
//Eliminar 
router.put('/tarjetabancaria/:numero', deleteTarjetaBancaria);



export default router;