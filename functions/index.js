/**
 * Import function triggers from their respective submodules:
 *
 * See supported triggers at:
 * https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const {
  importarCSV,
  listarProductos
} = require("./controllers/catalogoController");

// Limita el número máximo de instancias para controlar costos
setGlobalOptions({ maxInstances: 10 });

/**
 * Endpoint de verificación del servicio (Health Check)
 */
exports.health = onRequest((request, response) => {

  logger.info("Health Check ejecutado.");

  response.status(200).json({
    status: "UP",
    servicio: "Lunara Serverless",
    version: "1.0.0",
    mensaje: "Cloud Functions funcionando correctamente."
  });

});

/**
 * Importa el catálogo inicial desde productos.csv
 */
exports.importarCSV = onRequest(importarCSV);

/**
 * Obtiene todos los productos almacenados en Firestore
 */
exports.obtenerProductos = onRequest(listarProductos);

