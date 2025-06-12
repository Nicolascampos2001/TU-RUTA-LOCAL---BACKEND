import express from 'express';
import { borrarPagoPorId, crearPago, obtenerPagoPorId, obtenerPagos } from '../controllers/pagos.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();


router.post('/api/pagos', crearPago);
<<<<<<< HEAD
router.get('/api/pagos', authUser, obtenerPagos) 
router.get('/api/pagos/:id',authUser , obtenerPagoPorId)
=======
router.get('/api/pagos',authUser, obtenerPagos) 
router.get('/api/pagos/:id',authUser,obtenerPagoPorId)
>>>>>>> d37c56c14450b50022482d25d850d8a8a7bab580
router.delete('/api/pagos/:id',authUser, borrarPagoPorId)

export default router;