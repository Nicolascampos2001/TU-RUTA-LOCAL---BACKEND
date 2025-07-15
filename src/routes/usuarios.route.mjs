import express from 'express';
import {
  createUser,
  getAllusers,
  getUserById,
  removeProductById,
  updateUserById
} from '../controllers/usuarios.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', authUser, getAllusers);
router.get('/api/users/:id', authUser, getUserById);
router.delete('/api/users/:id', authUser, removeProductById);
router.patch('/api/users/:id', authUser, updateUserById); // <-- FIXED

export default router;
