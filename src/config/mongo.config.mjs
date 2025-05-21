import mongoose from 'mongoose';



//define una funcion asincrona para definir la confiracion del ODM Mongoose para usar MongoDB
async function dbconnect() {

    try {
        await mongoose.connect("mongodb+srv://nicolas-campos:Dh4871NLh6iOOHwK@cluster0.lwswblk.mongodb.net/db-tu-ruta-local", {});

        console.log( 'base de datos conectada exitosamente' )
    }
    catch (error) {
        console.error( error );
        console.error( 'error al conectarse a la base de datos' )
    }
}

export default dbconnect;