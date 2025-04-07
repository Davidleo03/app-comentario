import { Hono } from 'hono';
import { cors } from 'hono/cors';
import commentRoutes from "./routes/comentarios.js";

const app = new Hono();

// Configurar CORS
app.use('/*', cors());

// Rutas
app.route('/comentarios', commentRoutes);

app.get("/", (c) => c.json({data : "hola"}))

// Iniciar servidor
const port = 4000;
console.log(`Servidor corriendo en http://localhost:${port}`);
export default {
  port,
  fetch: app.fetch,
};
