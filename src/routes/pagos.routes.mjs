import express from 'express';
import { borrarPagoPorId, crearPago, obtenerPagoPorId, obtenerPagos } from '../controllers/pagos.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();


router.post('/api/pagos', crearPago);
router.get('/api/pagos',authUser, obtenerPagos) 
router.get('/api/pagos/:id',authUser,obtenerPagoPorId)
router.delete('/api/pagos/:id',authUser, borrarPagoPorId)

export default router;