// import type { InputHTMLAttributes, JSX } from 'react';
import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'


// explicitando : JSX.Element como tipo de retorno para fins didáticos.
// TypeScript já os infere pelo retorno.
// function TituloDoFormulario(props: {children: string}): JSX.Element{
//   return <h2>{props.children}</h2>
// }

function App() {
  return (
    <>
      <header>
        <img src='/logo.png' alt=''></img>
      </header>
      <section>
        <img src='/banner.png' alt=''></img>
      </section>
      <FormularioDeEvento />
    </>
  )
}

export default App