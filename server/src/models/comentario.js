import db from '../db/database.js';

export const createComentario = (nombre, comentario, fecha) => {
  const stmt = db.prepare('INSERT INTO comentarios (nombre, comentario, fecha) VALUES (?, ?, ?)');
  return stmt.run(nombre, comentario, fecha);
};

export const getAllComentarios = () => {
  const stmt = db.prepare('SELECT * FROM comentarios ORDER BY fecha DESC');
  console.log(stmt.all())
  return stmt.all();
};