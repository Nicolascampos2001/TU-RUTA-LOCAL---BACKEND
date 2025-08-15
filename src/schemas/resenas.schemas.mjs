import mongoose, { Mongoose } from "mongoose";

// define la estructura 
const resenaSchema = new mongoose.Schema({

    score: { 
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comentario: {
        type: String,
        maxlength: 1000
    },
    
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usuarios"
    },
    // servicio:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"servicios"
    // }

    
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