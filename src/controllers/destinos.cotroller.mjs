import destinosModel from "../schemas/destinos.schema.mjs";

const createDestino = async (req, res) =>{
    const imputData = req.body;    
    
    try {
        const registereddestino = await destinosModel.create( imputData );

        console.log( registereddestino );                   // imprime en la consola 
        res.status(201).json( registereddestino );                      // enviando la respuesta al cliente 
    }

    catch (error) {     // catch: captura e, erro producido por la excepcion
        console.error(error);
        res.status(500).json({ msg: 'error: No se pudo registrar el producto'});
    }
}

const getAllProducsts = async (req, res) => {
    try {
        const data = await destinosModel.find({});
        res.json( data );
    } 
    catch (error) {
        const data = await destinosModel.find({});
        res.json({ msg: 'error: no se puede obtener el listado de destinos'});
    }
    
}


//exponer las funcionalidades para ser usadas por otros archivos 
export {
    createDestino,
    getAllProducsts
}