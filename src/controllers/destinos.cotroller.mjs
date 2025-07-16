import destinosModel from "../schemas/destinos.schema.mjs";

const createDestino = async (req, res) =>{
    const imputData = req.body;    
    console.log(imputData)
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

const getAllDestino = async (req, res) => {
    try {
        const data = await destinosModel.find({})
        res.json( data );
    } 
    catch (error) {
        const data = await destinosModel.find({});
        res.json({ msg: 'error: no se puede obtener el listado de destinos'});
    }
    
}

const getDestinoDestacado = async (req, res) => {
    const cantidad = Number( req.params.cantidad ) || 0;
    try {
        const data = await destinosModel.find({ destacado: true }).limit( cantidad )
        res.json( data );
    } 
    catch (error) {
        const data = await destinosModel.find({});
        res.json({ msg: 'error: no se puede obtener el listado de destinos'});
    }
}
    
    
const getDestinosPorIdServicio = async ( req, res ) => {
    const data = req.params.id;


    try {
        const data = await  destinosModel.find({ serviceId: serviciosId })
        res.json({ data })
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Error: al eliminar el servicio'});
    }
}

const getDestinoByid = async (req, res ) =>{
    const destinosId = req.params.id;
    try {
        const data = await destinosModel.findOne({_id:destinosId});
        console.log(destinosId);    

        if( data == null ){
            return res.json({ msg: 'el destino no se encuentra registrado'});
        }
        res.json(data);
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'error: no se pudo encontrar el destino'})
    }
}

const removeDestinoByid = async (req, res) => {
    const destinoId = req.params.id;

    try {
        const data = await destinosModel.findByIdAndDelete(destinoId)

        if( data == null ){
            return res.json({ msg: 'el destino no se encuentra registrado'});
        }

    res.json( data );
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'error: no pudo eliminar el destino'})
    }
    
}

const updateProductById = async(req, res) => {
    const destinoId = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await destinosModel.findByIdAndUpdate( destinoId, inputData );

        res.json( data );
    } 
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: no se pudo actualizar el destino'})
    }

    
}

//exponer las funcionalidades para ser usadas por otros archivos 
export {
    createDestino,
    getAllDestino,
    getDestinoByid,
    removeDestinoByid,
    updateProductById,
    getDestinoDestacado,
    getDestinosPorIdServicio

}