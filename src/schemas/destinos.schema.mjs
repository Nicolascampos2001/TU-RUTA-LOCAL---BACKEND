import mongoose from "mongoose";
// define la estructura del documento que se va a registrar
const destinosSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [ true, 'el nombre del destino es obligatorio' ]
    },
    urlImage: {
        type: String,
    },
    score: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    services: {
        type: mongoose.Schema.Types.ObjectId, //referencia a otro documento
        ref: 'servicios', //nombre del modelo al que hace referencia
    },
    
    },
    {
    timestamps: true,
    versionKey: false                         // crea dos camos 'createdA', 'updatedAt
});

//definir el modelo
const destinosModel = mongoose.model( 
    'destinos',                                //define el nombre de la conexion dondese guardaran los documentos
    destinosSchema
);

// exponemos el modelo al resto de la aplicacion
export default destinosModel