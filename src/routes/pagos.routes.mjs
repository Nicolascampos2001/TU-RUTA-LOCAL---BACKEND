import express from 'express';
import { borrarPagoPorId, crearPago, obtenerPagoPorId, obtenerPagos } from '../controllers/pagos.controller.mjs';

const router = express.Router();


router.post('/api/pagos', crearPago);
router.get('/api/pagos', obtenerPagos) 
router.get('/api/pagos/:id',obtenerPagoPorId)
router.delete('/api/pagos/:id',borrarPagoPorId)

export default router;