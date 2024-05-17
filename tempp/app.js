require("dotenv").config();
const express = require("express");
const app = express();
const conectar = require("./db/conexion");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Hola, postMortem!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  conectar(); // Asegúrate de llamar a la función de conexión
});


const rutaMensaje = require("./routes/rutas.js"); //rutas de los mensajes


//definir las rutas

app.use('/api/', rutaMensaje);


/*
// Llamar a la función para establecer la conexión a la base de datos
conectar()
  .then(() => {
    // Tu código aquí
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
*/
