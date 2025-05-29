import pagosModel from '../pagos-schemas/pagos.schema.mjs';




const crearPago =  async (req, res ) => {
    const inputData = req.body;
    try {
        const data = await pagosModel.create(inputData);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json( {msg: 'error alrealizar el pago '} );
    }
    

    

}

const obtenerPagos = async (req, res) => {

try {
        const data = await pagosModel.find({});
    res.json(data);

}
catch (error) {
    console.error(error);
    res.status(500).json( {msg: 'error al obtener los pagos '} );
}



}

const obtenerPagoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await pagosModel.findById(id);
        if (!data) {
            return res.status(404).json({ msg: 'Pago no encontrado' });
        }
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener el pago' });
    }
}

export{
    crearPago,
    obtenerPagos,
    obtenerPagoPorId

}