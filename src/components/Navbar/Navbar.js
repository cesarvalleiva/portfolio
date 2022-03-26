import './Navbar.css'

const Navbar = () => {
    const mover = () => {
        window.scroll('#servicios')
    }
  return (
    <div className='navegacion'>
        <div className='contenedorNav container'>
            <div className='logo'>
                <img src={require('../../assets/img/logo_cvl.png')} alt="Logo CVL" />
            </div>
            <div className='menu'>
                <a href="#encabezado">Encabezado</a>
                <a href="#servicios">Servicios</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar