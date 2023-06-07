import {Router} from 'Express';
import {createUsuario, getUsuarios, getUsuario, updateUsuario, deleteUsuario} from '../controllers/usuarios.controller.js'
const router = Router();

//Crear 
router.post('/usuario', createUsuario)
//Obtener grupal
router.get('/usuarios', getUsuarios)
//Obtener individual
router.get('/usuario/:idUsuario', getUsuario);
//Actualizar 
router.put('/usuario/:idUsuario', updateUsuario);
//Eliminar
router.delete('/usuario/:idUsuario', deleteUsuario)


export default router;