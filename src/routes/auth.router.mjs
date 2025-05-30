import express from 'express'
import { createUser } from '../controllers/users.controllers.mjs';

const router = express.Router();

//define las rutas para la entidad Auth
router.post('/api/register',createUser)

export default router;