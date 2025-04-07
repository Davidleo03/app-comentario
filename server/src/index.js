import express from 'express'
import cors from 'cors'
import commentRoutes from "./routes/comentarios.js";

const app = express();

// Configurar CORS
app.use(cors());

// Rutas
app.use('/comentarios', commentRoutes);

app.get("/", (req, res) => {
  return res.json({data : "hola"}).status(200)
})

// Iniciar servidor

const port = process.env.PORT || 4000



app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

