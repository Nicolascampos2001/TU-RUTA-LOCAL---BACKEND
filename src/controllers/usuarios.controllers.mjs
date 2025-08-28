import userModel from '../schemas/usuarios.schema.mjs';

const createUser = async ( req, res ) => {
    const inputData = req.body;

    try {

        const registeredUser = await userModel.create( inputData ); 
        res.status ( 201 ).json( registeredUser );

    }

    catch ( error ) {

        // Manejo de errores de validación de Mongoose
        if (error.name === 'ValidationError') {
            const errors = {};

            // Recorremos cada propiedad del error y organizamos por campo
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }

            return res.status(400).json({
                message: 'Error de validación.',
                errors
            });
        }

        // Manejo de error por email duplicado (índice único)
        if (error.code === 11000) {
            const duplicatedField = Object.keys(error.keyValue)[0];

            return res.status(400).json({
                message: 'Violación de restricción única.',
                errors: {
                    [duplicatedField]: `Ya existe un registro con ese ${duplicatedField}.`
                }
            });
        }

        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error en el servidor.' });
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

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const data = await userModel.findById(userId);
    if (!data) {
      return res.status(404).json({ msg: 'El usuario no se encuentra registrado' });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error: no se pudo encontrar el usuario' });
  }
};


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