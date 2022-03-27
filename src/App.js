import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import './App.css';
import Sobremi from './components/Sobremi';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <Encabezado />
      <Sobremi />
      <Servicios />
      <Contacto />
    </Router>
  );
}

export default App;
