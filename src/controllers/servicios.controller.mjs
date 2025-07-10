import servicioModel from '../schemas/servicios.schema.mjs'; //importando el modelo de mongoose

const crearServicio = async (req, res) => {
    const inputData = req.body; 

    try {
        const registeredServicios = await servicioModel.create(inputData);

    console.log(registeredServicios);
    res.status(201).json(registeredServicios);
}
    
    catch (error) {
        console.error(error);
        res.status(500).json( {msg:'Error:al crear el servicio'} );
    }

}

const getAllServicios = async (req, res) => {
    try {
        console.log('Heeeeeey!!')
        // buscar todos los servicios
        const data = await servicioModel.find({});
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({msg:'Error: al obtener los servicios'});
    }

}

const getServiciosById = async (req, res) => {
    const serviciosId = req.params.id; //el nombre final dependera del nombre que le pongamos a la variable en la ruta

    try{
            const data = await servicioModel.findById(serviciosId);
        //verifica si el servicio existe
        // si no existe, retorna un mensaje de error
            if ( data == null) {
                return res.json({msg:'No se encontro el servicio con ese id'});
            }

    res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({msg:'Error: al obtener el servicio por id'});

    }


}

const deleteServicio = async (req, res) => {
    const serviciosId = req.params.id;

    try {
        const data = await servicioModel.findByIdAndDelete(serviciosId);
        
        if (data == null) {
            return res.json({msg:'No se encontro el servicio con ese id'});
            
        }
        res.json(data);
    }
    catch (error) {  
        console.error(error);
        res.status(500).json({msg:'Error: al eliminar el servicio'});
    } 

}

const patchServicio = async (req, res) => {
    const serviciosId = req.params.id; // obtenemos el id de la parametrizacion de la ruta 
    const inputData = req.body;  // obtenemos el body de la peticion
    console.log(inputData);

try { 
    const data = await servicioModel.findByIdAndUpdate(serviciosId,inputData, {new: true} );

res.json(data);


} catch (error) {
    console.error(error);
    res.status(500).json({msg:'Error: al actualizar el servicio'});
}


}



export{
    crearServicio,
    getAllServicios,
    getServiciosById,
    deleteServicio,
    patchServicio
}
