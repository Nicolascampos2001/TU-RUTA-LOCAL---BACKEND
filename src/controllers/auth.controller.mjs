import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import userModel from "../models/users.schema.mjs";

const loginUser = async (req, res) => {
    //paso 1: obetener los datos del body 
    const inputData = req.body;
    //paso 2 : verificar si el usuario existe
    const userFound = await userModel.findOne({ email: inputData.email });
    if(! userFound){
        return res.json({msg:'el usuario no existe, por favor registrese'})  
    }
    //paso 3: verificar si la contraseña es correcta
    const  isAuththenticated = bcrypt.compareSync(
        inputData.password, 
        userFound.password
    );

    if(! isAuththenticated){
        return res.json({msg:'la contraseña es incorrecta, por favor intente de nuevo'})
    }
    //paso 4: generar un token
    const payLoad ={
    name: userFound.name,
    email: userFound.email, 
    role: userFound.role,
    };

    const jwt_secret = 'nashe'; //se recomienda guardar en un archivo .env

    const token = jwt.sign(payLoad, //carga util
        jwt_secret,   //palabra secreta
        {expiresIn:'1h'}           //opciones de configuración
    );
    //paso 5: eliminar algunas propiedades que traen datos sensibles
    const objsUser = userFound.toObject();

    delete objsUser.password; 
    delete objsUser.createdAt;
    delete objsUser.updatedAt;
    //paso 6: respuesta al cliente
    res.json({
        token: token,
        user:userFound
    });
}


export { 
    loginUser
}