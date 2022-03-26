import { useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navi = useLocation()
  return (
    <div className='navegacion'>
        <div className='contenedorNav container'>
            <div className='logo'>
                <a href="#home"><img src={require('../../assets/img/logo_cvl.png')} alt="Logo CVL" /></a>
            </div>
            <div className='menu'>
                <a href="#home" className={navi.hash == '#home' || navi.hash == '' ? 'active' : ''}>Home</a>
                <a href="#servicios" className={navi.hash == '#servicios' ? 'active' : ''}>Sobre mi</a>
                <a href="#servicios" className={navi.hash == '#portfolio' ? 'active' : ''}>Portfolio</a>
                <a href="#contacto" className={navi.hash == '#contacto' ? 'active' : ''}>Contacto</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar