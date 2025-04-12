import supabase from '../db/database.js';


class ComentarioModel {
  static async getAll() {
    const { data, error } = await supabase
      .from('comentarios')
      .select('*')
      .order('fecha', { ascending: false }); // Ordenar por fecha descendente
    
    if (error) throw error;
    return data;
  }

  static async getById(id) {
    const { data, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create({ nombre, comentario }) {
    const { data, error } = await supabase
      .from('comentarios')
      .insert({
        nombre,
        comentario,
        fecha: new Date().toISOString() // Fecha actual automática
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async update(id, { nombre, comentario }) {
    const { data, error } = await supabase
      .from('comentarios')
      .update({
        nombre,
        comentario,
        fecha: new Date().toISOString() // Actualizar fecha al modificar
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async delete(id) {
    const { error } = await supabase
      .from('comentarios')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

export default ComentarioModel;
