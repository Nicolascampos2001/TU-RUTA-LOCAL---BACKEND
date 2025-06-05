import mongoose from "mongoose";

// define la estructura 
const resenaSchema = new mongoose.Schema({
    comentario: {
        type: String,
        maxlength: 1000
    },
    calificacion: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        default: 1
    }
    
}, {
    timestamps: true,
    versionKey: false
});


// define el modelo y vincula la estructura de datos de una coleccion
const resenasModel = mongoose.model(
    'resenas',
    resenaSchema
)

export default resenasModel;