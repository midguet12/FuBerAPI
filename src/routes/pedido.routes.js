import {Router} from 'Express';
import {createPedido,getPedido,getPedidos,deletePedido,updatePedido} from '../controllers/pedidos.controller.js'
const router = Router();

//Crear 
router.post('/pedido', createPedido)
//Obtener grupal
router.get('/pedidos', getPedidos)
//Obtener individual
router.get('/pedido/:idPedido', getPedido);
//Eliminar 
router.delete('/pedido/:idPedido', deletePedido);
//Actualizar
router.put('/pedido/:idPedido', updatePedido);



export default router;