import './App.css';
import Encabezado from './components/Encabezado';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';

function App() {
  return (
    <div>
      <Navbar />
      <Encabezado />
      <Servicios />
    </div>
  );
}

export default App;
