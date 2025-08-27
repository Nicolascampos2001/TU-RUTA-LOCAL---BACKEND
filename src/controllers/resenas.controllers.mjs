import resenasModel from "../schemas/resenas.schemas.mjs"

const createResenas = async (req, res) => {
    const inputData = req.body;

    try {
        const data = await resenasModel.create(inputData);
        res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'error: no se pudo crear la resena' })
    }

}

const getAllResenas = async (req, res) => {

    try {
        const data = await resenasModel.find({});



        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'error: no se pudo obtener el listado de resenas' });
    }

}

const getResenaDestacada = async (req, res) => {
    const cantidad = Number( req.params.cantidad ) || 0;
    try {
        const data = await resenasModel.find({ destacado: true }).limit( cantidad )
        res.json( data );
    } 
    catch (error) {
        const data = await resenasModel.find({});
        res.json({ msg: 'error: no se puede obtener el listado de destinos'});
    }
}

const getRenesasById = async (req, res) => {
    const resenId = req.params.id;

    try {
        const data = await resenasModel.findById(resenId);
        if (data == null) {
            return res.json({ msg: 'resena no registrada' })
        }
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'error: no pudo detener la resena por ID' })
    }

}

const updateResenasById = async (req, res) => {
    const resenaId = req.params.id;
    const inputData = req.body;

    try {
        const data = await resenasModel.findByIdAndUpdate(resenaId, inputData);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'erro: no pudo actualizar la resena' })
    }


    res.json(data);
}

const deleteResenaId = async (req, res) => {
    const resenaId = req.params.id;

    try {
        const data = await resenasModel.findByIdAndDelete(resenaId)
        if (data == null) {
            return res.json({ msg: 'el destino no se encuentra registrado' });
        }

        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'error: no pudo eliminar el destino' })
    }

}
// eponer cada funcionadlidad definidad en este archivo
export {
    createResenas,
    getAllResenas,
    getRenesasById,
    updateResenasById,
    getResenaDestacada,
    deleteResenaId
}