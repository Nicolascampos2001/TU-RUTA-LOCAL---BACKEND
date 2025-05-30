import bcrypt from "bcrypt";

import userModel from "../models/users.schema.mjs";



const createUser = async ( req, res ) => {
    const inputData = req.body;

    try {
        // Paso 1: Verificar si el usuario existe
        const userFound = await userModel.findOne({ 
            username: inputData.username,
            email: inputData.email
        });

        if( userFound ) {
            return res.status( 404 ).json({ msg: 'No pudo registrarse por que, el usuario ya existe.' });
        }

        // Paso 2: Encriptar la contrasena
        const salt = bcrypt.genSaltSync();
        console.log( 'salt: ', salt );    

        const hashPassword = bcrypt.hashSync(
            inputData.password,         // PASSWORD_ORIGINAL
            salt
        );
        console.log( 'hashPassword: ', hashPassword );
        inputData.password = hashPassword; // Reemplazar la contraseña original por la encriptada

        // Paso 3: Registrar el usuario
        const data = await userModel.create( inputData );

        // Paso 4: Responder al cliente que se registro existosamente
        res.status( 201 ).json( data );
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ msg: 'Error: No se pudo crear el usuario' });
    }

}


const getAllusers = async ( req, res ) => { 

    try {
        const data = await userModel.find ({});
    res.json( data );
    }

    catch ( error ) {
        console.error ( error );
        res,json({ msg: 'Error: no se pudo obtener el listado de productos'})
    }
    
}

const getUserById = async ( req, res) => {
    const userId = req.params.id; 
    try {

        const data = await userModel.findById( userId );
        // const data = await userModel.findOne( userId );
        //Verifica si el producto no existe y lanza el respectivo mensaje al cliente
        if( data == null ) {
            return res.json( { msg: 'El usuario no se encuentra registrado' });
        }
        res.json( data ); 

    }
    catch ( error ) {
        console.error ( error )
        res.json({ msg: 'Error: no se pudo encontrar el producto'});

    }

    
    

}

const removeProductById = async ( req, res ) => {
    const userId = req.params.id;
   

    try {
        const data = await userModel.findByIdAndDelete( userId );
         if( ! data ) {
            return res.json( { msg: 'El usuario no existe' });
        }

        res.json( data );
    }

    catch ( error ) {
        console.error( error );
        res.json({ msg: 'Error no pudo eliminar el usuario'})
        
    }
}

const updateUserById = async ( req, res ) => {
    const userId = req.params.id;
    const inputData = req.body

    try {
        const data = await userModel.findByIdAndUpdate( userId, inputData, { new:true } );
        res.json( data );
    }

    catch {
            console.error( error );
            res.json({ msg: 'Error: No se pudo actualizar el usuario' });
    }
}


export { 
    createUser,
    getAllusers,
    getUserById,
    removeProductById,
    updateUserById
}