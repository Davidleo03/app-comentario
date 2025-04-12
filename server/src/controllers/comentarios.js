import ComentarioModel from "../models/comentario.js";


class ComentarioController {
  static async getAll(req, res) {
    try {
      const comentarios = await ComentarioModel.getAll();
      res.json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const comentario = await ComentarioModel.getById(req.params.id);
      if (!comentario) {
        return res.status(404).json({ message: 'Comentario no encontrado' });
      }
      res.json(comentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      // Validación simple
      if (!req.body.nombre || !req.body.comentario) {
        return res.status(400).json({ error: 'Nombre y comentario son requeridos' });
      }

      const nuevoComentario = await ComentarioModel.create(req.body);
      res.status(201).json(nuevoComentario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      if (!req.body.nombre || !req.body.comentario) {
        return res.status(400).json({ error: 'Nombre y comentario son requeridos' });
      }

      const comentarioActualizado = await ComentarioModel.update(req.params.id, req.body);
      res.json(comentarioActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      await ComentarioModel.delete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ComentarioController;