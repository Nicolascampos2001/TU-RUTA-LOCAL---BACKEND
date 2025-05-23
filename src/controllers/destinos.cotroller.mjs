import destinosModel from "../schemas/destinos.schema.mjs";

const createDestino = async (req, res) =>{
    const imputData = req.body;    
    
    try {
        const registereddestino = await destinosModel.create( imputData );

        console.log( registereddestino );                   // imprime en la consola 
        res.send( registereddestino );                      // enviando la respuesta al cliente 
    }

    catch (error) {     // catch: captura e, erro producido por la excepcion
        console.error(error);
        res.status(500).json({ msg: 'error: No se pudo registrar el producto'});
    }
}

export {
    createDestino
}