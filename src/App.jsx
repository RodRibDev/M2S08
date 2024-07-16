import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CardBicicleta from './components/CardBicicleta'
import Contato from './components/Contato'

function App() {

  const bicicletas = [
    {
      id: 0, nomeModelo: 'Magic Might', preco: 2499,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',            
    },
    {
      id: 1, nomeModelo: 'Nimbus Stark', preco: 4999,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',            
    },
    {
      id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999,
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',      
    }
  ]

  return (
    <div className="container">
      <Header></Header>  

      <div className="bikes">    

      {bicicletas.map(bike =>
        <CardBicicleta 
          key={bike.id} 
          imgSrc={bike.imgSrc} 
          preco={bike.preco} 
          nomeModelo={bike.nomeModelo}/>
      )}

      </div>

      <Contato></Contato>

      <Footer></Footer>      
    </div>
  )
}

export default App
