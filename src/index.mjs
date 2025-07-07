// paso 1: importamos las dependendias (librerias, paquetes)
// const express = require( 'express' );               //importacion de dependencia usando commonJS
import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT ?? 3001;

import destinos from './routes/destinos.route.mjs';
import resenas from './routes/resenas.route.mjs';
import usuarios from './routes/usuarios.route.mjs';
import pagos from './routes/pagos.routes.mjs';  
import reservas from './routes/reservas.route.mjs';  
import servicios from './routes/servicios.route.mjs';

import auth from './routes/auth.router.mjs'; //importamos las rutas de auth

import dbconnect from './config/mongo.config.mjs';    ///importamos la conexion a al base de datos 


const app = express();

app.use( cors());
//invocar la configuracion de la conexion a la base de datos
app.use ( cors() );
app.use(express.json());


dbconnect();

app.use(destinos);
app.use(resenas);
app.use(usuarios);
app.use(pagos); 
app.use(reservas);
app.use(servicios);
app.use( auth ); //vincula las rutas de auth


app.listen( PORT, () =>{
    console.log( `servidor corriendo en http://localhost:${PORT}` );
});

