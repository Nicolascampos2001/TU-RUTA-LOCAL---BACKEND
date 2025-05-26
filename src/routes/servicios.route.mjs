

import express from 'express';
import { crearServicio, getAllServicios } from '../controllers/product.controller.mjs';

const router = express.Router();

//definir las rutas para la entidad servicios

router.post('/api/servicios', crearServicio);
router.get('/api/servicios', getAllServicios);

export default router;