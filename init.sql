CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  mail TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL
);
INSERT INTO users (mail, password, role)
VALUES
('admin2@cliniqueplus.fr', 'azerty', 'admin');
('admin@cliniqueplus.fr', 'azerty', 'admin'),
('secretaire@cliniqueplus.fr', 'azerty', 'staff')
