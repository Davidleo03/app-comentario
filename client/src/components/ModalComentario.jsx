import { useState } from 'react';

export default function ModalComentario({ isOpen, onClose, onSubmit }) {
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comentario.trim()) {
      onSubmit(comentario);
      setComentario('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Nuevo Comentario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comentario">Comentario:</label>
            <textarea
              id="comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}