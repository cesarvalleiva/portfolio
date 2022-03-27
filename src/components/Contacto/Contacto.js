import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto' id="contacto">
        <div className='container'>
            <div className='contenedorContacto'>
                <div className='infoContacto'>
                    <h3>CONTACTO</h3>
                    <div className='d-flex'><i className="bi bi-envelope-fill me-2"></i><p>info@cesarvalleiva.com.ar</p></div>
                    <div className='d-flex'><i className="bi bi-linkedin me-2"></i><p>César Val Leiva</p></div>
                </div>
                <div className='formContacto'>
                    <form>
                        <div className="mb-4">
                            <label className="form-label">Nombre completo</label>
                            <input type="email" className="form-control" placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="email@gmail.com" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                        <button className='btn btn-enviar'>ENVIAR</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto