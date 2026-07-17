const fs = require("fs");
const path = require("path");

const archivo = path.join(__dirname, "../frontend/js/productos.js");

let contenido = fs.readFileSync(archivo, "utf8");

// Reemplaza:
// img/productos/vestido.jpg
// por:
// vestido.jpg

contenido = contenido.replace(/img\/productos\//g, "");

fs.writeFileSync(archivo, contenido, "utf8");

console.log("✔ Las rutas de las imágenes fueron actualizadas.");
