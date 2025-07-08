import { v4 as uuidv4 } from "uuid";
import reservasModel from "../schemas/reservas.schema.mjs";

const createReservas = async (req, res) => {
  const inputData = req.body;
  inputData.codigoReserva = uuidv4().replace(/-/g, "").slice(0, 6);

  try {
    const data = await reservasModel.create(inputData);
    res.status(201).json(data);
  } 
  catch (error) {
    if (error.code === 11000 && error.keyPattern?.usuario) {
      return res
        .status(400)
        .json({ msg: "Ya existe una reserva con este usuario." });
    }
    console.error(error);
    res.status(500).json({ msg: "Error no se pudo crear la reserva" });
  }
};

const getReservas = async (req, res) => {
  try {
    const data = await reservasModel.find({});

    // Si se encuentra la reserva, la retorna correctamente
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: No se pudo obtener la reservas" });
  }
};
const getReservaById = async (req, res) => {
  const reservaId = req.params.id;
  try {
    const data = await reservasModel.findById(reservaId);

    if (!data) {
      return res.status(404).json({ msg: "Reserva no registrada" });
    }

    // Si se encuentra la reserva, la retorna correctamente
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: No se pudo obtener la reserva por ID" });
  }
};

const updateReservaById = async (req, res) => {
  const reservaId = req.params.id;
  const inputData = req.body;

  try {
    // Paso 1: Verificar si el usuario existe
    const reservaFound = await reservasModel.findById(reservaId);

    if (!reservaFound) {
      return res
        .status(404)
        .json({ msg: "La reserva que deseas actualizar no existe" });
    }

    // Paso 2: Actualizar el usuario si existe
    const data = await reservasModel.findByIdAndUpdate(reservaId, inputData, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: No pudo actualizar la reserva" });
  }
};

const deleteReservaById = async (req, res) => {
  const reservaId = req.params.id;

  try {
    // Paso 1: Verificar si el usuario existe por ID
    const reservaFound = await reservasModel.findById(reservaId);

    // userFound === null --> equivale a --> !userFound
    if (!reservaFound) {
      return res
        .status(404)
        .json({ msg: "La reserva que deseas eliminar no existe" });
    }

    // Paso 2: Eliminar el usuario por ID
    const data = await reservasModel.findOneAndDelete({ _id: reservaId });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: No puede eliminar la reserva por ID" });
  }
};

//Exponer cada funcionalidad definida en este archivo

export { createReservas, getReservaById, getReservas, updateReservaById, deleteReservaById };
