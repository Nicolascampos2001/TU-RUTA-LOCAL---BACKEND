import  express from 'express';
import { createResenas, deleteResenaId, getAllResenas, getRenesasById, updateResenasById } from '../controllers/resenas.controllers.mjs';

const router = express.Router();

// Define las ruta para la entidad resenas

router.post( '/api/resenas', createResenas);
router.get('/api/resenas', getAllResenas);
router.get('/api/resenas/:id', getRenesasById )
router.patch('/api/resenas/:id', updateResenasById)
router.delete('/api/resenas/:id', deleteResenaId)
export default router;