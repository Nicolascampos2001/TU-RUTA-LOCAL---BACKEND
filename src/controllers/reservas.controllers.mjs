import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import reservasModel from "../schemas/reservas.schema.mjs";

const createReservas = async (req, res) => {
  const inputData = req.body;

  // Validar que servicio es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(inputData.servicio)) {
    return res
      .status(400)
      .json({ msg: "El servicio seleccionado no es válido." });
  }

  // Generar código de reserva
  inputData.codigoReserva = uuidv4().replace(/-/g, "").slice(0, 6);

  try {
    const data = await reservasModel.create(inputData);
    res.status(201).json(data);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.usuario) {
      return res
        .status(400)
        .json({ msg: "Ya existe una reserva con este usuario." });
    }
    console.error(error);
    res.status(500).json({ msg: "Error: no se pudo crear la reserva" });
  }
};

const getReservas = async (req, res) => {
  try {
    const data = await reservasModel.find({}).populate("servicio");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: no se pudo obtener las reservas" });
  }
};

const getReservaById = async (req, res) => {
  const reservaId = req.params.id;

  try {

    const data = await reservasModel.findById(reservaId).populate("servicio");


    if (!data) {
      return res.status(404).json({ msg: "Reserva no registrada" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: no se pudo obtener la reserva por ID" });
  }
};

const updateReservaById = async (req, res) => {
  const reservaId = req.params.id;
  const inputData = req.body;

  // Validar que servicio (si viene en inputData) sea ObjectId válido
  if (inputData.servicio && !mongoose.Types.ObjectId.isValid(inputData.servicio)) {
    return res
      .status(400)
      .json({ msg: "El servicio proporcionado no es válido." });
  }

  try {
    const reservaFound = await reservasModel.findById(reservaId);

    if (!reservaFound) {
      return res
        .status(404)
        .json({ msg: "La reserva que deseas actualizar no existe" });
    }

    const data = await reservasModel.findByIdAndUpdate(reservaId, inputData, {
      new: true,
    }).populate("servicio");

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: no se pudo actualizar la reserva" });
  }
};

const deleteReservaById = async (req, res) => {
  const reservaId = req.params.id;

  try {
    const reservaFound = await reservasModel.findById(reservaId);

    if (!reservaFound) {
      return res
        .status(404)
        .json({ msg: "La reserva que deseas eliminar no existe" });
    }

    const data = await reservasModel.findByIdAndDelete(reservaId);
    res.status(200).json({ msg: "Reserva eliminada correctamente", data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudo eliminar la reserva por ID" });
  }
};

export {
  createReservas,
  getReservaById,
  getReservas,
  updateReservaById,
  deleteReservaById,
};