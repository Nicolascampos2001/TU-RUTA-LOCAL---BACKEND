

import express from 'express';
import { crearServicio } from '../controllers/product.controller.mjs';

const router = express.Router();

//definir las rutas para la entidad servicios

router.post('/api/servicios', crearServicio);

export default router;