// file routes: definir los endpoints de una entidad
import { Router } from 'express';       //importando el router de express
import { createUser } from '../controllers/users.controllers.mjs';
const router = Router();                //invocando el router (preparandolo para defirnir rutas)

//define las rutas de acceso 
router.get( '/api/users', (req, res) => {
    res.send( 'obtiene todos los usuarios' );
} );
router.post( '/api/users', createUser )

router.patch( '/api/users', (req, res) =>{
    res.send('actualizacion parcial de un usuario');
})
router.put( '/api/users', (req, res) => {
    res.send( 'actualizacion total de un usuario');
})
router.delete( '/api/users', (req,res) => {
    res.send( 'elimina un usuario' );
})

export default router;                  //exportando todas las rutas de esta entidad para ser usadas en cualquier parte de a aplicacion