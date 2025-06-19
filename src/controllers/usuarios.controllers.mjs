import userModel from '../schemas/usuarios.schema.mjs';

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