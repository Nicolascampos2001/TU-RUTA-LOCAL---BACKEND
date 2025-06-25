

import express from 'express';
import { crearServicio, deleteServicio, getAllServicios, getServiciosById, patchServicio } from '../controllers/servicios.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

//definir las rutas para la entidad servicios


router.post('/api/servicios',authUser, crearServicio);
router.get('/api/servicios', getAllServicios);
router.get('/api/servicios/:id', authUser,  getServiciosById)// parametrizar la ruta; cremaos una especie de variable que se llama id 
router.delete('/api/servicios/:id',authUser, deleteServicio); // ruta para eliminar un servicio por id
router.patch('/api/servicios/:id', authUser, patchServicio)



export default router;