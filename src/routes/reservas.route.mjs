import express from 'express';
import { createReservas, deleteReservaById, getReservaById, updateReservaById } from '../controllers/reservas.controllers.mjs';

const router = express.Router();

router.post( '/api/reservas', createReservas )

router.get( '/api/reservas/:id', getReservaById )

router.patch( '/api/reservas/:id', updateReservaById )

router.delete( '/api/reservas/:id', deleteReservaById )

export default router; 