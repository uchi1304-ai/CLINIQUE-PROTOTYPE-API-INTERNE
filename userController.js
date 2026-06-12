// Importamos las funciones del Model
const {  findAllUsers, findUserByMailAndPassword,updateUserRole, deleteUser} = require("./userModel");

// LOGIN
function login(req, res) {

  // Recuperamos mail y password enviados por Bruno
  const { mail, password } = req.body;

  // Pedimos al Model que busque el usuario
  findUserByMailAndPassword(mail, password,(user) => {
      // Si no existe
      if (!user) {
        return res.status(404).json({
          message: "Utilisateur non trouvé"
        });
      }
      // Si existe
      return res.status(200).json({
        message: "Connexion réussie",
        user: user
      });
    }
  );
}


// GET USERS
function users(req, res) {
  // Pedimos al Model todos los usuarios
  findAllUsers((users) => {
      if (!users) {
        return res.status(500).json({
          message: "Erreur serveur"
        });
      }
      return res.status(200).json(users);
    }
  );
}


// UPDATE USER ROLE
function updateUser(req, res) {
  // Recuperamos el id desde la URL
  const id = req.params.id;
  // Recuperamos el nuevo role desde Bruno
  const { role } = req.body;
  updateUserRole(id, role,(result) => {
      if (!result) {
        return res.status(500).json({
          message: "Erreur serveur"
        });
      }
      return res.status(200).json({
        message: "Role mis à jour"
      });
    }
  );
}

// DELETE USER
function removeUser(req, res) {
  const id = req.params.id;
  deleteUser( id,(result) => {
      if (!result) {
        return res.status(500).json({
          message: "Erreur serveur"
        });
      }
      return res.status(200).json({
        message: "Utilisateur supprimé"
      });
    }
  );
}

// Exportamos las funciones
module.exports = {  login,  users,  updateUser,  removeUser};
//Bruno envía una petición. El Controller recupera el 
// mail y el password y se los pasa al Model. El Model consulta SQLite. 
// SQLite verifica si existe un usuario que corresponda a esos datos. 
// Luego devuelve un usuario o nada. Finalmente el Controller envía la respuesta HTTP adecuada.