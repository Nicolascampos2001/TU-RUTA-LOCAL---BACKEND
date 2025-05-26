import express from 'express' //Importar la dependencia
import { createUser, getAllusers } from '../controllers/users.controllers.mjs';

const router = express.Router(); //invocando el router de Express

//Definir las rutas para la entidad Product

router.post( '/api/users', createUser );
router.get( '/api/users', getAllusers );
 
//Exponer el router de este archivo para ser usado por otros en la app
export default router; 