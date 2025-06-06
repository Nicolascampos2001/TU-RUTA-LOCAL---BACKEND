import express from 'express'
import { createUser } from '../controllers/usuarios.controllers.mjs';
import { loginUser, reNewToken } from '../controllers/auth.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

//define las rutas para la entidad Auth
router.post('/api/auth/register',createUser)
router.post('/api/auth/login',loginUser)
router.get('/api/auth/re-new-token', authUser, reNewToken);

export default router;  