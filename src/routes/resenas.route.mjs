import  express from 'express';
import { createResenas, deleteResenaId, getAllResenas, getRenesasById, updateResenasById } from '../controllers/resenas.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

// Define las ruta para la entidad resenas

router.post( '/api/resenas', createResenas);
router.get('/api/resenas', getAllResenas);
<<<<<<< HEAD
router.get('/api/resenas/:id', authUser, getRenesasById )
router.patch('/api/resenas/:id', authUser, updateResenasById)
router.delete('/api/resenas/:id', authUser, deleteResenaId)
=======
router.get('/api/resenas/:id',authUser, getRenesasById )
router.patch('/api/resenas/:id', updateResenasById)
router.delete('/api/resenas/:id', deleteResenaId)
>>>>>>> d37c56c14450b50022482d25d850d8a8a7bab580
export default router;