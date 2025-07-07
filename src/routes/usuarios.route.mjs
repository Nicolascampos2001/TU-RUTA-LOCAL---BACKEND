import express from 'express' //Importar la dependencia
import { createUser, getAllusers, getUserById, removeProductById, updateUserById } from '../controllers/usuarios.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router(); //invocando el router de Express

//Definir las rutas para la entidad Product

router.post( '/api/users', createUser );
router.get( '/api/users', authUser, getAllusers );
router.get( '/api/users/:id', authUser, getUserById );   //: id (parametrizar la ruta: Creamos una especie de variable)
router.delete( '/api/users/:id', authUser, removeProductById );
router.patch( 'api/users/:id', authUser, updateUserById );
//Exponer el router de este archivo para ser usado por otros en la app
export default router; 