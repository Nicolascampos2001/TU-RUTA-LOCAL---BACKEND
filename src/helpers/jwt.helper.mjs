
import jwt from 'jsonwebtoken';
const jwt_secret = 'nashe';
const generateToken = ( payLoad ) => {



    const token = jwt.sign(payLoad, //carga util
        jwt_secret,   //palabra secreta
        {expiresIn:'1h'}           //opciones de configuración
    );
    return token;
}

const verifyToken = ( token ) => {
        const payLoad = jwt.verify(
            token,
            jwt_secret
        );
        return payLoad;
    
}





    export{
        generateToken,
        verifyToken
    }

