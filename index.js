// Importamos Express para crear la API
const express = require("express");

// Importamos las funciones del controller
const { login, users } = require("./userController");

// Creamos la aplicación Express
const app = express();

// Permitimos que Express lea JSON enviado en el body
app.use(express.json());

// Ruta simple para comprobar que la API funciona
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API CliniquePlus opérationnelle"
  });
});

// Ruta POST /login
// Cuando alguien hace POST /login, ejecutamos la función login
app.post("/login", login);

// Ruta GET /users
// Permite recuperar la lista de usuarios
app.get("/users", users);

// Arrancamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});