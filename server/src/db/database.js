import pg from "pg"
import { config } from "dotenv"

config()

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

console.log('Conectado a la base de datos PostgresSql')

// Crear tabla si no existe
const createTable = async () => {
  try {
    await pool.query(`
  CREATE TABLE IF NOT EXISTS comentarios (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    comentario TEXT NOT NULL,
    fecha TEXT
  )
`)
   console.log("Tabla Creada")

  } catch (e) {
    console.error(`Error ${e}`)
  }
}

createTable()

export default pool;