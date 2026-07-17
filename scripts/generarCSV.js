const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");

const productos = require("../frontend/js/productos");

const csvWriter = createObjectCsvWriter({
    path: path.join(__dirname, "../dataset/productos.csv"),

    header: [
        { id: "id", title: "id" },
        { id: "nombre", title: "nombre" },
        { id: "categoria", title: "categoria" },
        { id: "talla", title: "talla" },
        { id: "precio", title: "precio" },
        { id: "stock", title: "stock" },
        { id: "imagen", title: "imagen" },
        { id: "descripcion", title: "descripcion" }
    ]
});

csvWriter.writeRecords(productos)
    .then(() => {
        console.log("✔ Archivo productos.csv generado correctamente.");
    })
    .catch((error) => {
        console.error("Error al generar el CSV:", error);
    });
    