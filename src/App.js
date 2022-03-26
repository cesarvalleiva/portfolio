import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Encabezado />
      <Servicios />
    </Router>
  );
}

export default App;
