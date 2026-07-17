const {
  leerProductosCSV
} = require("../services/csvService");

const {
  guardarProducto,
  obtenerProductos
} = require("../services/firestoreService");

const cors = require("cors")({ origin: true });

/**
 * Importa el catálogo inicial desde el archivo productos.csv
 */
async function importarCSV(req, res) {

  cors(req, res, async () => {

    try {

      const productos = await leerProductosCSV();

      for (const producto of productos) {
        await guardarProducto(producto);
      }

      res.status(200).json({
        mensaje: "Importación finalizada correctamente.",
        productosImportados: productos.length
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        mensaje: "Error al importar el catálogo.",
        error: error.message
      });

    }

  });

}

/**
 * Obtiene todos los productos almacenados en Firestore.
 */
async function listarProductos(req, res) {

  cors(req, res, async () => {

    try {

      const productos = await obtenerProductos();

      res.status(200).json(productos);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        mensaje: "Error consultando productos.",
        error: error.message
      });

    }

  });

}

module.exports = {
  importarCSV,
  listarProductos
};
