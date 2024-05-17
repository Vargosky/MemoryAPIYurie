const express = require("express");
const router = express.Router();
const {
  guardarMensaje,
  consultarMensajes,
  eliminarMensaje,
  mostrarMensaje,
} = require("../controllers/Mensajes");

// Ruta para guardar un mensaje
router.post("/mensaje", async (req, res) => {
  try {
    const { correoDestinatario, mensajeTexto, videoURL, fotosURL } = req.body;
    const nuevoMensaje = await guardarMensaje(correoDestinatario, mensajeTexto, videoURL, fotosURL);
    res.status(201).json(nuevoMensaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar todos los mensajes
router.get("/mensajes", async (req, res) => {
  try {
    const mensajes = await consultarMensajes();
    res.status(200).json(mensajes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar un mensaje por ID
router.delete("/mensaje/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mensajeEliminado = await eliminarMensaje(id);
    res.status(200).json({ message: mensajeEliminado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para mostrar un mensaje por ID
router.get("/mensaje/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mensaje = await mostrarMensaje(id);
    res.status(200).json(mensaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
