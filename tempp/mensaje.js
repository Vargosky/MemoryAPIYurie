const mongoose = require("mongoose");

// Definir el esquema del mensaje
const mensajeSchema = new mongoose.Schema({
  correoDestinatario: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  video: {
    type: String, // Puedes almacenar la URL del video
    required: false, // No es obligatorio incluir un video
  },
  fotos: [
    {
      type: String, // Puedes almacenar múltiples URLs de imágenes en un array
    },
  ],
});

// Crear el modelo 'Mensaje' a partir del esquema definido
const Mensaje = mongoose.model("Mensaje", mensajeSchema);

module.exports = Mensaje;
