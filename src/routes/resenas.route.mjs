import  express from 'express';
import { createResenas, deleteResenaId, getAllResenas, getRenesasById, updateResenasById } from '../controllers/resenas.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

// Define las ruta para la entidad resenas

router.post( '/api/resenas', createResenas);
router.get('/api/resenas', getAllResenas);
router.get('/api/resenas/:id', authUser, getRenesasById )
router.patch('/api/resenas/:id', authUser, updateResenasById)
router.delete('/api/resenas/:id', authUser, deleteResenaId)
export default router;