import pool from '../db/database.js';

export const createComentario = async (nombre, comentario, fecha) => {
  try {
    const result = await pool.query('INSERT INTO comentarios (nombre, comentario, fecha) VALUES ($1, $2, $3)',
      [nombre, comentario, fecha]);
    console.log(result.rows[0])
    return result.rows[0]

  } catch (e) {
    console.log(`Error: ${e}`)
    return e
  }
};

export const getAllComentarios = async () => {
  try {
    const result = await pool.query('SELECT * FROM comentarios ORDER BY fecha DESC');
    return result.rows
    
  } catch (e) {
    console.log(`Error: ${e}`)
    return e

  }
};