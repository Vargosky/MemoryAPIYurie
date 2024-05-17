require("dotenv").config();
const express = require("express");
const app = express();
const conectar = require("./db/conexion"); // Asegúrate de que esta ruta sea correcta
const rutaMensaje = require("./routes/rutas.js"); //rutas de los mensajes

const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Ruta base para verificar que el servidor está funcionando
app.get("/", (req, res) => {
  res.send("¡Hola, postMortem!");
});

// Definir las rutas para los mensajes
app.use('/api/', rutaMensaje);

// Llamar a la función para establecer la conexión a la base de datos
conectar()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
