// Importamos Express para crear la API 
const express = require("express");

// Importamos las fonctions du Controller
const {login, users, updateUser, removeUser} = require("./userController");

// Creamos la aplicación Express
const app = express();

// Permite recibir JSON en el body de las requêtes
app.use(express.json());


// Route de test
// Permite verificar que la API funciona
app.get("/", (req, res) => {

res.status(200).json({
    message: "API CliniquePlus opérationnelle"
  });

});
// LOGIN
// POST /login
app.post("/login", login);

// LISTA DE USUARIOS
// GET /users
app.get("/users", users);

// MODIFICAR ROLE
// PUT /users/1
app.put("/users/:id", updateUser);

// ELIMINAR USUARIO
// DELETE /users/1
app.delete("/users/:id", removeUser);


// Arranque del servidor
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});