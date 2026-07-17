const { db } = require("../config/firebase");

const COLECCION = "productos";

/**
 * Guarda o actualiza un producto utilizando el ID del CSV.
 */
async function guardarProducto(producto) {

  const idDocumento = producto.id.toString();

  await db
    .collection(COLECCION)
    .doc(idDocumento)
    .set(producto);

}

/**
 * Obtiene todos los productos ordenados por ID.
 */
async function obtenerProductos() {

  const snapshot = await db
    .collection(COLECCION)
    .orderBy("id")
    .get();

  const productos = [];

  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });

  return productos;

}

module.exports = {
  guardarProducto,
  obtenerProductos
};
