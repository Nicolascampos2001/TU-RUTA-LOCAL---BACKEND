// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );               //importacion de dependencia usando commonJS
import express from 'express';
import product from './routes/product.route.mjs';
// paso 2: ejecutamos express
const app = express();

app.use(product);

//paso 4:lanzamos el servidor web usando express escuchando en el puerto 300
//         http://localhost:<port>
app.listen( 3000, () =>{
    console.log( 'servidor corriendo en http://localhost:3000')
});