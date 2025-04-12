import { Router } from 'express';
import ComentarioController from '../controllers/comentarios.js';

const ComentarioRoutes = Router();

ComentarioRoutes.get("/", ComentarioController.getAll);

ComentarioRoutes.post("/", ComentarioController.create)


export default ComentarioRoutes;
