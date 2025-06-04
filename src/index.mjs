// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );               //importacion de dependencia usando commonJS
import express from 'express';
<<<<<<< HEAD
import products from './routes/product.route.mjs';
import destinos from './routes/destinos.route.mjs';
=======
import products from './routes/product.route.mjs';""
import resenas from './routes/resenas.route.mjs';
>>>>>>> feature/resenas
import dbconnect from './config/mongo.config.mjs';    ///importamos la conexion a al base de datos 


const app = express();

//invocar la configuracion de la conexion a la base de datos
app.use(express.json());

dbconnect();

<<<<<<< HEAD
app.use( express.json())
app.use(products);
app.use(destinos);


=======
app.use(resenas);
>>>>>>> feature/resenas

app.listen( 3000, () =>{
    console.log( 'servidor corriendo en http://localhost:3000')
});

