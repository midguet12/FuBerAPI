import {Router} from 'express';
import {createProducto, getProductos, getProducto, updateProducto, deleteProducto, getProductosTienda} from '../controllers/productos.controller.js'
const router = Router();

//Crear 
router.post('/producto', createProducto)
//Obtener grupal
router.get('/productos', getProductos)
//Obtener individual
router.get('/producto/:idProducto', getProducto);
//Obtener productos de tienda
router.get('/productos/:idTienda',getProductosTienda)
//Actualizar 
router.put('/producto/:idProducto', updateProducto);
//Eliminar
router.delete('/producto/:idProducto', deleteProducto)


export default router;