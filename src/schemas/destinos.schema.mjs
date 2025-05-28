import mongoose from "mongoose";
// define la estructura del documento que se va a registrar
const destinosSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: [ true, 'el nombre del destino es obligatorio' ]
    },
    urlImage: {
        type: String,
    },
    feedback: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }
},{
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