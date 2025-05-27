

import express from 'express';
import { crearServicio, deleteServicio, getAllServicios, getServiciosById, patchServicio } from '../controllers/product.controller.mjs';

const router = express.Router();

//definir las rutas para la entidad servicios

router.post('/api/servicios', crearServicio);
router.get('/api/servicios', getAllServicios);
router.get('/api/servicios/:id', getServiciosById)// parametrizar la ruta; cremaos una especie de variable que se llama id 
router.delete('/api/servicios/:id', deleteServicio); // ruta para eliminar un servicio por id
router.patch('/api/servicios/:id', patchServicio)
export default router;