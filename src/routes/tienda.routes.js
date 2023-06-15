import {Router} from 'express';
import {createTienda,getTiendas,getTienda,deleteTienda,updateTienda,getFotoTienda} from '../controllers/tienda.controller.js'
const router = Router();

//Crear 
router.post('/tienda', createTienda)
//Obtener grupal
router.get('/tiendas', getTiendas)
//Obtener individual
router.get('/tienda/:idTienda', getTienda);
//Obtener foto
router.get('/tienda/foto/:idTienda',getFotoTienda);
//Eliminar 
router.delete('/tienda/:idTienda', deleteTienda);
//Actualizar
router.put('/tienda/:idTienda', updateTienda);
export default router;
