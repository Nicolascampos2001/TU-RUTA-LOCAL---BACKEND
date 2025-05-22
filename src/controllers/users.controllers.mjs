const createUser = ( req, res ) => {   
    const inputData = req.body;

    console.log( inputData );
    res.send( 'Crear un usuario' );
}



export {
    createUser
}