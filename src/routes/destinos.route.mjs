// file routes: definir los endpoints de una entidad
import { Router } from 'express';       //importando el router de express
import { createDestino, getAllDestino, getDestinoByid, removeDestinoByid, updateProductById } from '../controllers/destinos.cotroller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';
const router = Router();                //invocando el router (preparandolo para defirnir rutas)

//define las rutas de acceso 

router.post( '/api/destinos',authUser, createDestino );  
router.get( '/api/destinos',  getAllDestino);
router.get( '/api/destinos/:id', authUser, getDestinoByid );  //  :id (parametrizar la ruta: creamos una especie de variable)
router.delete( '/api/destinos/:id',authUser, removeDestinoByid );
router.patch( '/api/destinos/:id', authUser, updateProductById );


export default router;                  //exportando todas las rutas de esta entidad para ser usadas en cualquier parte de a aplicacionS
