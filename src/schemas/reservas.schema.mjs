import mongoose from "mongoose";

//Define la estructura de datos del documento

const reservasSchema = new mongoose.Schema({
  // Vincula esta propiedad con el Modelo de Usuario
  usuario: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'usuarios'
  },
  // Vincula esta propiedad con el Modelo de Servicio
  servicio: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Servicio', required: true
  },
  fechaReservada:{
    type: Date,
    required: true //TODO: revisar que el tipo sea date
  },
  cantidadPersonas: {
    type: Number,
    default: 1,
    min: [1, 'Debe haber al menos una persona']
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'pendiente'
  },
  codigoReserva:{
    type: String,
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