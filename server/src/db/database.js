import { createClient } from '@supabase/supabase-js'
import { config } from "dotenv"

config()

const supase_url = process.env.SUPABASE_URL;
const supase_key = process.env.SUPABASE_KEY;

const supabase = createClient(supase_url, supase_key);

console.log('Conectado a la base de datos PostgresSql');


export default supabase;




