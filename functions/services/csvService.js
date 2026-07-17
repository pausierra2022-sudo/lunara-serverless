const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

/**
 * Lee el archivo productos.csv y retorna un arreglo de productos.
 */
function leerProductosCSV() {

  return new Promise((resolve, reject) => {

    const productos = [];

    const rutaCSV = path.join(
      __dirname,
      "..",
      "dataset",
      "productos.csv"
    );

    fs.createReadStream(rutaCSV)
      .pipe(csv())

      .on("data", (fila) => {

        productos.push({
          id: Number(fila.id),
          nombre: fila.nombre,
          categoria: fila.categoria,
          talla: fila.talla,
          descripcion: fila.descripcion,
          precio: Number(fila.precio),
          imagen: "img/productos/" + fila.imagen,
          stock: Number(fila.stock)
         
        });

      })

      .on("end", () => resolve(productos))

      .on("error", reject);

  });

}

module.exports = {
  leerProductosCSV
};
