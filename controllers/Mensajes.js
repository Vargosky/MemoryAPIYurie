const Mensaje = require("./mensaje"); // Requiere el modelo del mensaje

// Función para guardar un mensaje en la base de datos
async function guardarMensaje(
  correoDestinatario,
  mensajeTexto,
  videoURL,
  fotosURL
) {
  try {
    const nuevoMensaje = new Mensaje({
      correoDestinatario,
      mensaje: mensajeTexto,
      video: videoURL,
      fotos: fotosURL,
    });
    await nuevoMensaje.save();
    return nuevoMensaje;
  } catch (error) {
    throw new Error("Error al guardar el mensaje en la base de datos");
  }
}

// Función para consultar todos los mensajes de la base de datos
async function consultarMensajes() {
  try {
    const mensajes = await Mensaje.find();
    return mensajes;
  } catch (error) {
    throw new Error("Error al consultar mensajes en la base de datos");
  }
}

// Función para eliminar un mensaje de la base de datos por su ID
async function eliminarMensaje(idMensaje) {
  try {
    await Mensaje.findByIdAndDelete(idMensaje);
    return "Mensaje eliminado exitosamente";
  } catch (error) {
    throw new Error("Error al eliminar el mensaje de la base de datos");
  }
}

// Función para mostrar un mensaje de la base de datos por su ID
async function mostrarMensaje(idMensaje) {
  try {
    const mensaje = await Mensaje.findById(idMensaje);
    return mensaje;
  } catch (error) {
    throw new Error("Error al mostrar el mensaje de la base de datos");
  }
}

module.exports = {
  guardarMensaje,
  consultarMensajes,
  eliminarMensaje,
  mostrarMensaje,
};
