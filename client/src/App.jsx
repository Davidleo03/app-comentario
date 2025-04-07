import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NombreForm from './components/NombreForm';
import ComentarioList from './components/ComentarioList';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NombreForm />} />
        <Route path="/comentarios" element={<ComentarioList />} />
      </Routes>
    </Router>
  );
}