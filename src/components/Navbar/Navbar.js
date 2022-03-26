import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navegacion'>
        <div className='contenedorNav container'>
            <div className='logo'>
                <img src={require('../../assets/img/logo_cvl.png')} alt="Logo CVL" />
            </div>
            <div className='menu'>
                Home
            </div>
        </div>
    </div>
  )
}

export default Navbar