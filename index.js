// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );                            //commonJS
import express from 'express';             //ESModule

// paso 2: ejecutamos express
const app = express();

//paso 3:lanzamos el servidor web usando express escuchando en el puerto 300
app.listen( 3000, () =>{
    console.log( 'servidor lanzado exitosamente')
});