import mongoose from "mongoose";
import bcrypt from "bcrypt";


// / Definir la estructura de datos (nuestro documento) */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [ true, 'El correo del usuario es obligatorio' ],
        unique: [ true, 'El correo ya esta registrado. Solo puede registrarse con un unico correo' ]
    },
    // Definir propiedades, atributos o campos (Documento)
    name:{
        type: String,
        required: [ true, 'El nombre del usuario es obligatorio' ]
    },
    // / username, puede ser: un correo, # identificacion, alias */
    username: {
        type: String,
        required: [ true, 'El correo del usuario es obligatorio' ],
        unique: [ true, 'El correo ya esta registrado. Solo puede registrarse con un unico correo' ]
    },
    password: {
        type: String,
        trim: true,
        // min: [ 6, 'La contraseña debe tener mínimo 6 caracteres' ],
        // max: [ 12, 'La contraseña debe tener máximo 12 caracteres' ],
        required: [ true, 'La contraseña es obligatoria' ],
    },  
    movil: {
        type: Number,
        trim: true,
    },
    role: {
        type: String,
        enum: [ 'administrador', 'comercial', 'cliente'],
        default: 'cliente'
    }
}, {
    timestamps: true, // Agrega las propiedades createdAt
    versionKey: false // contador __v de modificaciones del schema
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
//define el schema a una propiedad especifica
const userModel = mongoose.model(
    'usuarios',           //Nombre de la colección a la que voy a asociar
    userSchema         //La estructura de datos a la que lo vamosa vincular
);

export default userModel   // exponemos el model para ser usado por cualquier otro archivo en mi aplicación