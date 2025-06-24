import mongoose, { Mongoose } from "mongoose";

// define la estructura 
const resenaSchema = new mongoose.Schema({

    comentario: {
        type: String,
        maxlength: 1000
    },
    calificacion: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usuarios"
    },
    servicio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"servicios"
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