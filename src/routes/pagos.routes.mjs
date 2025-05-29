import express from 'express';
import { crearPago, obtenerPagoPorId, obtenerPagos } from '../controllers/pagos.controller.mjs';

const router = express.Router();


router.post('/api/pagos', crearPago);
router.get('/api/pagos', obtenerPagos) 
router.get('/api/pagos/:id',obtenerPagoPorId)

export default router;