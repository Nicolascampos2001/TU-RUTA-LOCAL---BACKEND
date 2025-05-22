// file routes: definir los endpoints de una entidad
import { Router } from 'express';       //importando el router de express
import { actualizacionServicio, actualizarServicio, borrarServicio, crearServicio, obtenerServicio } from '../controllers/servicios.controller.mjs';
const router = Router();                //invocando el router (preparandolo para defirnir rutas)



//define las rutas de acceso y vincula a su respectivo controlador
router.post( '/api/servicios',crearServicio )

router.delete( '/api/servicios', borrarServicio)

router.patch( '/api/servicios',  actualizarServicio)

router.get( '/api/servicios', obtenerServicio);

router.put( '/api/servicios',  actualizacionServicio)

export default router;                  //exportando todas las rutas de esta entidad para ser usadas en cualquier parte de a aplicacion