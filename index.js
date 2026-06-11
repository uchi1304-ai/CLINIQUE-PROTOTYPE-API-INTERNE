// Importamos Express para crear la API
const express = require("express");

// Importamos sqlite3 para conectarnos a SQLite
const sqlite3 = require("sqlite3").verbose();

// Creamos la aplicación Express
const app = express();

// Permite recibir JSON en el body de las requêtes
app.use(express.json());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données", err.message);
  } else {
    console.log("Connexion à SQLite réussie");
  }
});

// Ruta simple para verificar que la API funciona
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API CliniquePlus opérationnelle"
  });
});

// Ruta obligatoria POST /login
app.post("/login", (req, res) => {
  // Recuperamos mail y password enviados desde Bruno
    const { mail, password } = req.body || {};
  // Si falta mail o password
  if (!mail || !password) {
    return res.status(400).json({
      message: "Mail et mot de passe obligatoires"
    });
  }

  // Consulta SQL para buscar el usuario por mail
  const sql = "SELECT * FROM users WHERE mail = ?";

  // Ejecutamos la consulta en SQLite
  db.get(sql, [mail], (err, user) => {
    // Error técnico del servidor o de la base
    if (err) {
      return res.status(500).json({
        message: "Erreur serveur"
      });
    }

    // Usuario no encontrado
    if (!user) {
      return res.status(404).json({
        message: "Utilisateur non trouvé"
      });
    }

    // Contraseña incorrecta
    if (user.password !== password) {
      return res.status(401).json({
        message: "Mot de passe incorrect"
      });
    }

    // Login correcto
    return res.status(200).json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        mail: user.mail,
        role: user.role
      }
    });
  });
});

// Arrancamos el servidor
app.listen(3000, () => {
  console.log("serveur lancé sur http://localhost:3000");
});
