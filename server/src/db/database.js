import pg from "pg"
import { config } from "dotenv"

config()

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl : {
    rejectUnauthorized : false
  }
  
})

console.log('Conectado a la base de datos PostgresSql')



export default pool;
