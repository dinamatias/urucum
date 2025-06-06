import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import TelaCadastro from './paginas/TelaCadastro'
//import TelaLogin from './paginas/TelaLogin'
import CabecalhoArtista from './componentes/Cabecalhos/Cabecalho-artista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CabecalhoArtista />
    </>
  )
}

export default App
