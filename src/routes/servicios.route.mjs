

import express from 'express';
import { crearServicio, getAllServicios, getServiciosById } from '../controllers/product.controller.mjs';

const router = express.Router();

//definir las rutas para la entidad servicios

router.post('/api/servicios', crearServicio);
router.get('/api/servicios', getAllServicios);
router.get('/api/servicios/:id', getServiciosById)// parametrizar la ruta; cremaos una especie de variable que se llama id 
export default router;