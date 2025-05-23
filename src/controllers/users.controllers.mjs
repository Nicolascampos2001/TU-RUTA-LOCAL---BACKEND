import userModel from "../models/users.schema.mjs";

const createUser = async ( req, res ) => {
    const inputData = req.body;

    try {

    const registeredUser = await userModel.create( inputData ); 

    console.log( registeredUser )
    res.status ( 201 ).json( registeredUser );

    }

    catch ( error ) {

        console.error( error );
        res.status( 500 ).json( { msg: 'Error no se pudo registrar el usuario' });

    }

}



export {
    createUser
}