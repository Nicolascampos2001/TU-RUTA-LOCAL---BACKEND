import servicioModel from '../schemas/servicios.schema.mjs'; //importando el modelo de mongoose

const crearServicio = async (req, res) => {
    const inputData = req.body; 

    try {
        const registeredProduct = await servicioModel.create(inputData);

    console.log(registeredProduct);
    res.status(201).json(registeredProduct);
}
    
    catch (error) {
        console.error(error);
        res.status(500).json( {msg:'Error:al crear el servicio'} );
    }

}

export{
    crearServicio
}
