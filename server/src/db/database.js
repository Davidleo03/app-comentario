import Database from 'better-sqlite3';

const db = new Database('src/db/comentarios.db');

console.log('Conectado a la base de datos Sqlite3')

// Crear tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    comentario TEXT NOT NULL,
    fecha TEXT NOT NULL
  )
`);

export default db;