import { useEffect, useState } from 'react';
import ModalComentario from './ModalComentario';

export default function ComentarioList() {
  const [comentarios, setComentarios] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const nombreUsuario = localStorage.getItem('nombreUsuario');

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      
      const response = await fetch('https://app-comentario-server.vercel.app/comentarios');
      const data = await response.json(); 
      
      setComentarios(data);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  const handleNuevoComentario = async (comentario) => {
    try {
      
      const response = await fetch('https://app-comentario-server.vercel.app/comentarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombreUsuario,
          comentario: comentario,
        }),
      });

      console.log(response)

      if (response.ok) {
        fetchComentarios();
        setModalAbierto(false);
      }
    } catch (error) {
      console.error('Error al crear comentario:', error);
    }
  };

  return (
    <div className="container">
      <h1>Hola {nombreUsuario} Bienvenido!</h1>
      <h2></h2>
      <button onClick={() => setModalAbierto(true)}>Agrega una palabra de la prédica de hoy</button>
      
      <div className="comentarios-list">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario-card">
            <h3>{comentario.nombre}</h3>
            <p>{comentario.comentario}</p>
            <small>{new Date(comentario.fecha).toLocaleString()}</small>
          </div>
        ))}
      </div>

      <ModalComentario
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onSubmit={handleNuevoComentario}
      />
    </div>
  );
}
