import mongoose from "mongoose";

//Define la estructura de datos del documento

const reservasSchema = new mongoose.Schema({

  usuario: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref:'users'
  },
  servicio: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref:'servicios'
  },
  fechaReservada:{
    type: String,
    required: false //TODO: revisar porque no funciona cuando está en true
  },
  personas: {
    type: Number,
    default: 1,
    min: [1, 'Debe haber al menos una persona'],
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'pendiente'
  },
  codigo:{
    type:Number,
    required: true,
    unique: true,

  }
} , {
    timestamps: true, 
    versionKey: false,
});

//Define el modelo y vincula la estructura de datos a una colección

const reservasModel = mongoose.model(
    'reservas',
    reservasSchema
)

export default reservasModel; 