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
      /*
      const response = await fetch('http://localhost:3000/api/comentarios');
      const data = await response.json(); */
      const data = [
        {
          id : 1,
          nombre: "David",
          comentario : "Mi primer comentario ",
          fecha: new Date().toISOString
        }, 
        {
          id : 2,
          nombre: "David",
          comentario : "Mi segundo comentario ",
          fecha: new Date().toISOString
        }
      ]
      setComentarios(data);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  const handleNuevoComentario = async (comentario) => {
    try {
      
      const response = await fetch('http://localhost:3000/api/comentarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombreUsuario,
          comentario: comentario,
        }),
      });

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
      <h1>Hola {nombreUsuario}</h1>
      <h2>Comentarios</h2>
      <button onClick={() => setModalAbierto(true)}>Nuevo Comentario</button>
      
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