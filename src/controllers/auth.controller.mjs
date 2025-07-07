import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import userModel from "../schemas/usuarios.schema.mjs";
import { generateToken } from "../helpers/jwt.helper.mjs";

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
    role: userFound.role
    };

    const token = generateToken(payLoad);
    //paso 5: eliminar algunas propiedades que traen datos sensibles
    const objsUser = userFound.toObject();

    delete objsUser.password; 
    delete objsUser.createdAt;
    delete objsUser.updatedAt;
    //paso 6: respuesta al cliente
    res.json({
        token: token,
        user: objsUser
    });
}



const reNewToken = async (req, res ) =>{
    const payLoad = req.authUser; //obtiene el payload del token

const token = generateToken(payLoad); 

    res.json({msg:token});

}

export { 
    loginUser,
    reNewToken
}