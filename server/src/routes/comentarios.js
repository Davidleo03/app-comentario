import { Hono } from 'hono';
import { createComentario, getAllComentarios } from '../models/comentario.js';

const commentRoutes = new Hono();

// Obtener todos los comentarios
commentRoutes.get('/', (c) => {
  const comentarios = getAllComentarios();
  return c.json(comentarios);
});

// Crear nuevo comentario
commentRoutes.post('/', async (c) => {
  const { nombre, comentario } = await c.req.json();
  const fecha = new Date().toISOString();
  
  const result = createComentario(nombre, comentario, fecha);
  
  if (result.changes > 0) {
    return c.json({ success: true, message: 'Comentario creado' }, 201);
  } else {
    return c.json({ success: false, message: 'Error al crear comentario' }, 500);
  }
});



export default commentRoutes;