import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const token = req.header('X-token');

    // verifica que el token no venga vacio
    if (! token ){
        return res.json ({msg: 'error al obtener el token '});
    }

    const jwt_secret = 'nashe';

    
    const payLoad = jwt.verify(token, jwt_secret)

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