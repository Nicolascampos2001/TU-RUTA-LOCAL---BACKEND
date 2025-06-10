import express from 'express';
import { createReservas, deleteReservaById, getReservaById, updateReservaById } from '../controllers/reservas.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

router.post( '/api/reservas',authUser, createReservas )

router.get( '/api/reservas/:id', getReservaById )

router.patch( '/api/reservas/:id', updateReservaById )

router.delete( '/api/reservas/:id', deleteReservaById )

export default router; //TODO 