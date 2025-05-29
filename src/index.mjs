// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );               //importacion de dependencia usando commonJS
import express from 'express';
import products from './routes/product.route.mjs';
import resenas from './routes/resenas.route.mjs';
import dbconnect from './config/mongo.config.mjs';    ///importamos la conexion a al base de datos 


const app = express();

//invocar la configuracion de la conexion a la base de datos
dbconnect();

app.use(resenas);

app.listen( 3000, () =>{
    console.log( 'servidor corriendo en http://localhost:3000')
});

