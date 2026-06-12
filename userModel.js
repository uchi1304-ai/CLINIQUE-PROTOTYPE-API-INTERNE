// Importamos sqlite3 para conectarnos a SQLite
const sqlite3 = require("sqlite3").verbose();

// Conexión a la base de datos SQLite
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données", err.message);
  } else {
    console.log("Connexion à SQLite réussie");
  }
});

// Función para buscar un usuario por mail y password
function findUserByMailAndPassword(mail, password, callback) {
  const sql =
    "SELECT id, mail, role FROM users WHERE mail = ? AND password = ?";

//db.get( consulta SQL,  datos recibidos en js rellana los ?, respuesta de SQLite a user 
// llega el objeto user con id, mail y role)
  db.get(sql, [mail, password], (err, user) => {
    if (err) {
      return callback(null);
    }

    callback(user);
  });
}

// Función para recuperar todos los usuarios
function findAllUsers(callback) {
  const sql = "SELECT id, mail, role FROM users";

  db.all(sql, [], (err, users) => {
    if (err) {
      return callback(null);
    }

    callback(users);
  });
}

// Exportamos las funciones para usarlas en userController.js
module.exports = { findUserByMailAndPassword, findAllUsers };