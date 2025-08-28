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
    destacado: {
        type: Boolean,
        default: false
    },
    

}, {
    timestamps: true,
    versionKey: false
});



const resenasModel = mongoose.model(
    'resenas',
    resenaSchema
)

export default resenasModel;