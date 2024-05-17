require("dotenv").config();
const mongoose = require("mongoose");

// Cadena de conexión a la base de datos MongoDB
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

// Configuración y establecimiento de la conexión a MongoDB
async function conectar() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName, // Nombre de la base de datos
    });
    console.log("Conexión a MongoDB establecida");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Salir del proceso con código de error
  }
}

module.exports = conectar;
