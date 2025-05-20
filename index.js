// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );               //importacion de dependencia usando commonJS
import express from 'express';             //ESModule

// paso 2: ejecutamos express
const app = express();

//paso 3: crear los Endpoins (putos de entrada)
app.get( '/', ( req, res ) => {
    res.send( '<h1>Home</h1>');
});
//http://localhost:<port>
app.get( '/abaut-us', (req, res) => {
    res.send( '<h1>Abaut us</h1>');
});
app.get('/contact', (req, res) =>{
    res.send('h1<contact</h1>');
});


//paso 4:lanzamos el servidor web usando express escuchando en el puerto 300
//         http://localhost:<port>
app.listen( 3000, () =>{
    console.log( 'servidor lanzado exitosamente')
});