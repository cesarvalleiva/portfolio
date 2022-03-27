import './Sobremi.css'

const Sobremi = () => {
  return (
    <div className='sobremi' id="sobremi">
        <div className='container'>
            <div className='infoPersonal'>
                <div className='imagen '>
                    <img src={require('../../assets/img/cesarvalleiva.jpeg')} alt="César Val Leiva" className='shadow' />
                </div>
                <div className='info'>
                    <h2>Soy César Val Leiva</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat ante sed mauris aliquet elementum. Nulla quis est rutrum, tristique orci a, cursus tellus. Curabitur sollicitudin mauris eu est hendrerit, sit amet fermentum purus rutrum. Donec maximus sed risus ac mollis. Nam sodales efficitur ligula id bibendum. Proin et condimentum lorem. Cras at enim dui. Cras vulputate odio non neque molestie pretium. Nullam bibendum hendrerit neque vestibulum mollis. Nulla at convallis leo. Etiam eu tortor nec libero rutrum egestas ultrices eget lacus. Nam sit amet urna eu purus rutrum congue at id enim. Nam egestas purus eu posuere vestibulum. Cras ornare lobortis est in maximus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat ante sed mauris aliquet elementum. Nulla quis est rutrum, tristique orci a, cursus tellus. Curabitur sollicitudin mauris eu est hendrerit, sit amet fermentum purus rutrum. Donec maximus sed risus ac mollis. Nam sodales efficitur ligula id bibendum. Proin et condimentum lorem. Cras at enim dui. Cras vulputate odio non neque molestie pretium. Nullam bibendum hendrerit neque vestibulum mollis. Nulla at convallis leo. Etiam eu tortor nec libero rutrum egestas ultrices eget lacus. Nam sit amet urna eu purus rutrum congue at id enim. Nam egestas purus eu posuere vestibulum. Cras ornare lobortis est in maximus.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sobremi