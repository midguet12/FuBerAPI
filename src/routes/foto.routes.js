import {Router} from 'Express';
import {createFoto, getFotos, getFoto, updateFoto, deleteFoto} from '../controllers/fotos.controller.js'
const router = Router();

//Crear 
router.post('/foto', createFoto)
//Obtener grupal
router.get('/fotos', getFotos)
//Obtener individual
router.get('/foto/:idFoto', getFoto);
//Actualizar 
router.put('/foto/:idFoto', updateFoto);
//Eliminar
router.delete('/foto/:idFoto', deleteFoto)


export default router;