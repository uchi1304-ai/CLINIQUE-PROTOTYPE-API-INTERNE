# CliniquePlus Prototype API Interne

## Description

Ce projet est une API REST simple développée avec **Node.js**, **Express** et **SQLite** dans le cadre du projet CliniquePlus.

L'objectif est de mettre en place une première architecture Backend permettant :

* la connexion d'un utilisateur ;
* la consultation des utilisateurs ;
* la modification d'un rôle utilisateur ;
* la suppression d'un utilisateur.

Le projet utilise une architecture simple :

```text
index.js
↓
userController.js
↓
userModel.js
↓
database.db (SQLite)
```

---

## Technologies utilisées

* Node.js
* Express
* SQLite3
* Nodemon
* Git / GitHub

---

## Installation

Cloner le dépôt :

```bash
git clone <url-du-repository>
```

Se placer dans le dossier du projet :

```bash
cd CLINIQUE-PROTOTYPE-API-INTERNE
```

Installer les dépendances :

```bash
npm install
```

---

## Lancer le serveur

Mode développement :

```bash
nodemon index.js
```

ou

```bash
npm run dev
```

Le serveur démarre sur :

```text
http://localhost:3000
```

---

## Base de données

La base SQLite utilisée est :

```text
database.db
```

Le script d'initialisation est :

```text
init.sql
```

---

## Routes disponibles

### Vérification de l'API

#### GET /

URL :

```http
GET http://localhost:3000/
```

Réponse :

```json
{
  "message": "API CliniquePlus opérationnelle"
}
```

---

### Connexion utilisateur

#### POST /login

URL :

```http
POST http://localhost:3000/login
```

Body :

```json
{
  "mail": "admin@cliniqueplus.fr",
  "password": "azerty"
}
```

Réponse :

```json
{
  "message": "Connexion réussie",
  "user": {
    "id": 1,
    "mail": "admin@cliniqueplus.fr",
    "role": "admin"
  }
}
```

---

### Liste des utilisateurs

#### GET /users

URL :

```http
GET http://localhost:3000/users
```

Réponse :

```json
[
  {
    "id": 1,
    "mail": "admin@cliniqueplus.fr",
    "role": "admin"
  }
]
```

---

### Modification du rôle

#### PUT /users/:id

URL :

```http
PUT http://localhost:3000/users/1
```

Body :

```json
{
  "role": "staff"
}
```

Réponse :

```json
{
  "message": "Role mis à jour"
}
```

---

### Suppression d'un utilisateur

#### DELETE /users/:id

URL :

```http
DELETE http://localhost:3000/users/1
```

Réponse :

```json
{
  "message": "Utilisateur supprimé"
}
```

---

## Structure du projet

```text
CLINIQUE-PROTOTYPE-API-INTERNE
│
├── index.js
├── userController.js
├── userModel.js
├── init.sql
├── database.db
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Auteur

Projet réalisé dans le cadre de la formation Développeur IA / Data chez Simplon.
