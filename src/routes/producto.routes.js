import {Router} from 'Express';
import {createProducto, getProductos, getProducto, updateProducto, deleteProducto} from '../controllers/productos.controller.js'
const router = Router();

//Crear 
router.post('/Producto', createProducto)
//Obtener grupal
router.get('/Productos', getProductos)
//Obtener individual
router.get('/Producto/:idProducto', getProducto);
//Actualizar 
router.put('/Producto/:idProducto', updateProducto);
//Eliminar
router.delete('/Producto/:idProducto', deleteProducto)


export default router;