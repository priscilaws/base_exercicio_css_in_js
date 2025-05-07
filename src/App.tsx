import Header from './components/Cabecalho'
import HeroContainer from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <HeroContainer />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
