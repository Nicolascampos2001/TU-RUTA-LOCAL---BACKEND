// file routes: definir los endpoints de una entidad
import { Router } from 'express';       //importando el router de express
const router = Router();                //invocando el router (preparandolo para defirnir rutas)

//define las rutas de acceso 
router.get( '/api/products', (req, res) => {
    res.send( 'obtiene todos los productos' );
} );
router.post( '/api/products', (req, res) =>{
    res.send( 'crear un producto' );
})
router.patch( '/api/products', (req, res) =>{
    res.send('actualizacion parcial de un producto');
})
router.put( '/api/products', (req, res) => {
    res.send( 'actualizacion total de un producto');
})
router.delete( '/api/products', (req,res) => {
    res.send( 'elimina un producto' );
})

export default router;                  //exportando todas las rutas de esta entidad para ser usadas en cualquier parte de a aplicacion