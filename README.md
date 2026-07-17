# Lunara Serverless

> **Aplicación web Serverless desarrollada con Firebase Cloud Functions, Firebase Firestore y Firebase Hosting.**

**Aplicación desplegada:**  
https://lunara-serverless.web.app

**Repositorio:**  
https://github.com/pausierra2022-sudo/lunara-serverless

Abstract:

Aplicación web desarrollada bajo una arquitectura **Serverless** utilizando **Firebase Cloud Functions**, **Firebase Firestore** y **Firebase Hosting**. El proyecto implementa un flujo completo de integración de datos desde un archivo CSV hasta una aplicación web desplegada en la nube.

---

# Descripción del proyecto

Lunara Serverless es una aplicación web desarrollada como evidencia práctica para la asignatura de Computación Serverless. El proyecto implementa un flujo completo de integración de datos utilizando servicios administrados de Firebase.

La solución inicia con un conjunto de datos en formato CSV que contiene el catálogo de productos de Lunara. Dicho archivo es procesado mediante una función serverless desarrollada con Firebase Cloud Functions, la cual carga la información en Firebase Firestore.

Posteriormente, otra función serverless expone los datos mediante una API HTTP consumida por el frontend desarrollado en HTML, CSS y JavaScript.

La aplicación fue desplegada utilizando Firebase Hosting, permitiendo acceder al catálogo desde Internet sin necesidad de administrar servidores, cumpliendo así con los principios de la arquitectura Serverless.

---

# Objetivos

## Objetivo general

Desarrollar una aplicación web Serverless que permita integrar un conjunto de datos en formato CSV con una base de datos en la nube, implementando funciones serverless para el procesamiento y consulta de la información, y publicando la aplicación mediante Firebase Hosting.

## Objetivos específicos

- Implementar una base de datos Serverless utilizando Firebase Firestore.
- Importar un conjunto de datos en formato CSV mediante Firebase Cloud Functions.
- Desarrollar funciones Serverless para consultar la información almacenada en Firestore.
- Construir una aplicación web utilizando HTML, CSS y JavaScript que consuma las funciones desplegadas.
- Publicar la aplicación utilizando Firebase Hosting.
- Aplicar los principios de la computación Serverless eliminando la necesidad de administrar infraestructura.

---

# Arquitectura de la solución

La solución implementa una arquitectura completamente Serverless utilizando los servicios administrados de Firebase.

El frontend de la aplicación se encuentra alojado en Firebase Hosting. Cuando un usuario accede al catálogo de productos, el navegador realiza solicitudes HTTP hacia Firebase Cloud Functions, las cuales actúan como capa de lógica de negocio y acceso a datos.

Las funciones consultan la información almacenada en Firebase Firestore y devuelven los productos en formato JSON. Finalmente, el frontend procesa la respuesta y construye dinámicamente las tarjetas del catálogo.

Adicionalmente, una función Serverless permite importar el conjunto de datos desde un archivo CSV hacia Firestore, automatizando el proceso de carga inicial de información.

---

# Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

## Backend Serverless

- Firebase Cloud Functions
- Node.js
- Express.js

## Base de datos

- Firebase Firestore

## Infraestructura Cloud

- Firebase Hosting

## Control de versiones

- Git
- GitHub

## Formato de intercambio de datos

- JSON

## Dataset

- Archivo CSV

---

# Estructura del proyecto

```text
Lunara_V6_Serverless
│
├── frontend/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── index.html
│   ├── catalogo.html
│   ├── carrito.html
│   ├── login.html
│   ├── registro.html
│   ├── pago.html
│   ├── contacto.html
│   └── nosotros.html
│
├── functions/
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── controllers/
│   │   └── catalogoController.js
│   │
│   ├── services/
│   │   ├── csvService.js
│   │   └── firestoreService.js
│   │
│   ├── dataset/
│   │   └── productos.csv
│   │
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── scripts/
│   ├── generarCSV.js
│   └── actualizarImagenes.js
│
├── docs/
│   ├── arquitectura/
│   ├── decisiones/
│   └── evidencias/
│
├── firebase.json
├── firestore.rules
├── firestore.indexes.json
├── package.json
├── package-lock.json
└── README.md
```

---

# Flujo de funcionamiento

La solución implementa el siguiente flujo de procesamiento de datos:

1. Se dispone de un conjunto de datos en formato CSV con la información del catálogo de productos.

2. Una función Serverless procesa el archivo CSV y registra cada producto en Firebase Firestore.

3. El usuario accede a la aplicación web publicada en Firebase Hosting.

4. El frontend realiza una solicitud HTTP hacia Firebase Cloud Functions.

5. La función consulta la colección de productos almacenada en Firestore.

6. La información es devuelta al navegador en formato JSON.

7. El frontend genera dinámicamente las tarjetas del catálogo y permite realizar búsquedas y filtros sobre los productos.

---

# Diagrama de arquitectura

```text
                     Usuario
                         │
                         ▼
              Firebase Hosting
          (Frontend HTML, CSS y JS)
                         │
                  Solicitud HTTP
                         │
                         ▼
         Firebase Cloud Functions
      (Lógica de negocio y API HTTP)
                         │
             Consulta de información
                         │
                         ▼
             Firebase Firestore
            (Base de datos NoSQL)
                         ▲
                         │
              Importación desde CSV
                         │
                         ▼
               Dataset productos.csv
```

---

# Características implementadas

- Arquitectura completamente Serverless.
- Integración de datos mediante archivo CSV.
- Persistencia de datos en Firebase Firestore.
- API HTTP implementada con Firebase Cloud Functions.
- Aplicación web desarrollada con HTML, CSS y JavaScript.
- Catálogo dinámico de productos.
- Búsqueda por nombre.
- Filtro por categoría.
- Filtro por talla.
- Filtro por precio máximo.
- Visualización de productos mediante tarjetas.
- Carrito de compras utilizando LocalStorage.
- Inicio y cierre de sesión mediante almacenamiento local.
- Despliegue público mediante Firebase Hosting.

---

# Despliegue

La aplicación fue publicada utilizando Firebase Hosting, mientras que la lógica del backend fue implementada mediante Firebase Cloud Functions y la persistencia de datos mediante Firebase Firestore.

## Aplicación desplegada

https://lunara-serverless.web.app

## Plataforma Cloud

Firebase

---

# Evidencias

Las evidencias del desarrollo se encuentran organizadas dentro de la carpeta:

```text
docs/
└── evidencias/
```

Se incluyen capturas correspondientes a:

- Aplicación web en funcionamiento.
- Firebase Firestore.
- Firebase Cloud Functions.
- Firebase Hosting.
- Flujo de integración del dataset.
- Arquitectura implementada.

---

# Autor

**Paula Marcela Sierra Gaber**

Maestría en Arquitectura de Software

Politécnico Grancolombiano

2026
