import { Router } from 'express';
import { createComentario, getAllComentarios } from '../models/comentario.js';

const commentRoutes = Router();

// Obtener todos los comentarios
commentRoutes.get('/', async (req, res) => {
  const comentarios = await getAllComentarios();
  console.log(comentarios)
  return res.json(comentarios).status(200);
});

// Crear nuevo comentario
commentRoutes.post('/', async (req, res) => {
  const { nombre, comentario } =  await req.body;

  console.log(req.body)
  const fecha = new Date().toISOString();
  
  const result = createComentario(nombre, comentario, fecha);
  
  if (result.changes > 0) {
    return res.json({ success: true, message: 'Comentario creado' }).status(201);
  } else {
    return res.json({ success: false, message: 'Error al crear comentario' }).status(500);
  }
});



export default commentRoutes;
