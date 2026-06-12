// Importamos SQLite
const sqlite3 = require("sqlite3").verbose();
// Conexión a SQLite
const db = new sqlite3.Database(
  "./database.db",
  (err) => {
    if (err) {
      console.error(
        "Erreur de connexion à la base de données",
        err.message
      );
    } else {
      console.log(
        "Connexion à SQLite réussie"
      );
    }
  }
);


// LOGIN
// Buscar un usuario por mail y password
function findUserByMailAndPassword(  mail,  password,  callback) {
  const sql =
    "SELECT id, mail, role FROM users WHERE mail = ? AND password = ?";
  db.get(sql,[mail, password],(err, user) => {
      if (err) {
      return callback(null);
      }
      callback(user);
    }
  );
}

// GET USERS
// Recuperar todos los usuarios
function findAllUsers(callback) {
  const sql =
    "SELECT id, mail, role FROM users";
  db.all(sql,[],(err, users) => {
      if (err) {
        return callback(null);
      }
      callback(users);
    }
  );
}


// UPDATE
// Modificar el role de un usuario
function updateUserRole(id, role, callback) {
  const sql =
    "UPDATE users SET role = ? WHERE id = ?";
  db.run(sql,[role, id],(err) => {
      if (err) {
        return callback(null);
      }
      callback(true);
    }
  );
}

// DELETE
// Eliminar un usuario
function deleteUser(id, callback) {
  const sql =
    "DELETE FROM users WHERE id = ?";
  db.run(sql,[id],(err) => {if (err) {
        return callback(null);
      }
      callback(true);
    }
  );
}


// Exportamos todas las funciones
module.exports = {findUserByMailAndPassword,findAllUsers,updateUserRole,deleteUser};