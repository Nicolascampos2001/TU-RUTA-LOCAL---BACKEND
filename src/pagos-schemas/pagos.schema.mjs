// models/Transaccion.js
import mongoose from "mongoose";

const pagosSchema = new mongoose.Schema(
    {

        metodoPago: {
            type: String,
            enum: ["wompi", "mercadopago", "stripe", "otro"],
            required: true,
            default: "otro",
        },
        estado: {
            type: String,
            enum: ["pendiente", "exitoso", "fallido", "reembolsado"],
            default: "pendiente",
        },
        monto: {
            type: Number,
            required: [true, "El monto es requerido"],
            default: 0,
        },
        moneda: {
            type: String,
            default: "COP",
        },
        referenciaExterna: {
            type: String,
        },
        fechaPago: {
            type: Date,
        },
    },
    { timestamps: true },
    {versionKey: false }
);
const pagosModel = mongoose.model("Pagos",
    pagosSchema);

export default pagosModel;