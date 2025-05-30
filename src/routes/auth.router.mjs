import express from 'express'
import { createUser } from '../controllers/users.controllers.mjs';
import { loginUser } from '../controllers/auth.controller.mjs';

const router = express.Router();

//define las rutas para la entidad Auth
router.post('/api/register',createUser)
router.post('/api/login',loginUser)

export default router;