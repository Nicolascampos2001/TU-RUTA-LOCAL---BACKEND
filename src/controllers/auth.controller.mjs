import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../schemas/usuarios.schema.mjs";
import { generateToken } from "../helpers/jwt.helper.mjs";

const loginUser = async (req, res) => {
  //paso 1: obetener los datos del body
  const inputData = req.body;
  //paso 2 : verificar si el usuario existe
  const userFound = await userModel.findOne({ email: inputData.email });
  if (!userFound) {
    return res.json({ msg: "el usuario no existe, por favor registrese" });
  }
  //paso 3: verificar si la contraseña es correcta
  const isAuththenticated = bcrypt.compareSync(
    inputData.password,
    userFound.password
  );

  if (!isAuththenticated) {
    return res.json({
      msg: "la contraseña es incorrecta, por favor intente de nuevo",
    });
  }
  //paso 4: generar un token
  const payLoad = {
    _id: userFound._id,
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
    user: objsUser,
  });
};

const reNewToken = async ( req, res ) => { // Agrega 'async' aquí
    // Paso 1: Asegurarnos de que el middleware de autenticación funcionó
    // Si req.authUser no existe, significa que el middleware falló o no se ejecutó.
    if (!req.authUser || !req.authUser.email) {
        // Esto debería ser manejado por el middleware, pero es una buena verificación de respaldo
        console.error('Error: req.authUser no está disponible o no tiene el email en reNewToken');
        return res.status(401).json({ msg: 'Token inválido o no proporcionado.' });
    }

    const emailFromToken = req.authUser.email; // Obtenemos el email del payload del token ya verificado

    try {
        // Paso 2: Buscar el usuario en la base de datos usando el email del token
        const userFound = await userModel.findOne({ email: emailFromToken });

        if (!userFound) {
            // Si por alguna razón el usuario ya no existe en la DB (ej. fue eliminado)
            return res.status(404).json({ msg: 'Usuario no encontrado en la base de datos.' });
        }

        // Paso 3: Generar un nuevo payload y un nuevo token con la información actualizada del usuario
        // Esto asegura que el token siempre contenga la información más reciente del usuario
        const newPayload = {
            _id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            role: userFound.role
        };

        const newToken = generateToken( newPayload );

        // Paso 4: Preparar el objeto de usuario para la respuesta (limpiando datos sensibles)
        const objsUser = userFound.toObject();
        delete objsUser.password;
        delete objsUser.createdAt;
        delete objsUser.updatedAt;

        // Paso 5: Respuesta al cliente
        res.json({
            token: newToken,
            user: objsUser
        });

    } catch (error) {
        console.error('Error al renovar token en el servidor:', error);
        return res.status(500).json({ msg: 'Error interno del servidor al renovar el token.' });
    }
}

export { loginUser, reNewToken };
