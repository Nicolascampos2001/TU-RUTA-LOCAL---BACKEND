// mongoose:  definir la estructura de datos de mi documento

import mongoose from 'mongoose'; //importando la libreria mongoose

// definir el schema

const serviciosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
        min: 0,
        default: 0,
    },

    category: {
        type: String,
        default: 'non-category',
        required: [true, 'por favor escoge una categoria'],
        enum: ['tour', 'safari', 'caminata'],
    },
    urlImage: {
        type: String,
    },
    state: {
        type: String,
        enum: ['disponible', 'no-disponible', ],
        default: 'disponible',
    },
}, {
    timestamps: true,
    versionKey: false,      // elimina la propiedad __v
});

//definir el modelo
const servicioModel  = mongoose.model('Servicios', serviciosSchema);

//exportar el modelo
export default servicioModel;