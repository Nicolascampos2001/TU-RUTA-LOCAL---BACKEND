
import { verifyToken } from '../helpers/jwt.helpar.mjs';

const authUser = (req, res, next) => {
    const token = req.header('X-token');

    // verifica que el token no venga vacio
    if (! token ){
        return res.json ({msg: 'error al obtener el token '});
    }

    const jwt_secret = 'nashe';

    
    const payLoad = verifyToken(token); //verifica el token y obtiene el payload
    delete payLoad.iat; //elimina la propiedad iat del payload
    delete payLoad.exp; //elimina la propiedad exp del payload
    
    req.authUser = payLoad;
     //asigna el payload al objeto user del request
    console.log(req);

    next();
}




export{
    authUser
}