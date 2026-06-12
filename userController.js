// Importamos las funciones que hablan con la base de datos
const { findAllUsers, findUserByMailAndPassword } = require("./userModel");

// Función que gestiona la conexión/login, pero no crea la ruta, solo dice que quiero que haga cuando 
// intenta conectarse.
function login(req, res) {
  // Recuperamos mail y password enviados desde Bruno en el body JSON
  const { mail, password } = req.body;

  // Buscamos el usuario en la base con mail y password
  findUserByMailAndPassword(mail, password, (user) => {
    // Si no encontramos usuario, respondemos error 404
    if (!user) {
      return res.status(404).json({
        message: "Utilisateur non trouvé"
      });
    }

    // Si encontramos usuario, respondemos éxito 200
    return res.status(200).json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        mail: user.mail,
        role: user.role
      }
    });
  });
}

// Función que devuelve todos los usuarios
function users(req, res) {
  findAllUsers((users) => {
    // Si hay problema con la base, users será null
    if (!users) {
      return res.status(500).json({
        message: "Erreur serveur"
      });
    }

    // Si todo va bien, devolvemos la lista
    return res.status(200).json({
      message: "Liste des utilisateurs",
      users: users
    });
  });
}

// Exportamos las funciones para usarlas en index.js
module.exports = { login, users };

//Bruno envía una petición. El Controller recupera el 
// mail y el password y se los pasa al Model. El Model consulta SQLite. 
// SQLite verifica si existe un usuario que corresponda a esos datos. 
// Luego devuelve un usuario o nada. Finalmente el Controller envía la respuesta HTTP adecuada.