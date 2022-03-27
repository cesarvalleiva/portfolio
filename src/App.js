import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import './App.css';
import Sobremi from './components/Sobremi';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Encabezado />
      {/* <Sobremi /> */}
      <Servicios />
      <Contacto />
      <Footer />
    </Router>
  );
}

export default App;
