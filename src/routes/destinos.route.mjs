// file routes: definir los endpoints de una entidad
import { Router } from 'express';       //importando el router de express
import { createDestino, getAllDestino, getDestinoByid, removeDestinoByid, updateProductById } from '../controllers/destinos.cotroller.mjs';
const router = Router();                //invocando el router (preparandolo para defirnir rutas)

//define las rutas de acceso 
router.post( '/api/destinos', createDestino );
router.get( '/api/destinos', getAllDestino);
router.get( '/api/destinos/:id', getDestinoByid );  //  :id (parametrizar la ruta: creamos una especie de variable)
router.delete( '/api/destinos/:id', removeDestinoByid );
router.patch( '/api/destinos/:id', updateProductById );

export default router;                  //exportando todas las rutas de esta entidad para ser usadas en cualquier parte de a aplicacion