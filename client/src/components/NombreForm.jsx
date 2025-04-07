import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NombreForm() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      localStorage.setItem('nombreUsuario', nombre);
      navigate('/comentarios');
    }
  };

  return (
    <div className="container">
      <h1>Registra tu nombre</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
}