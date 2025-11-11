// import type { InputHTMLAttributes, JSX } from 'react';
import './App.css'
import { Banner } from './componentes/Banner';
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema, type temaType } from './componentes/Tema';
import { CardEvento, type eventoType } from './componentes/CardEvento'
import { useState } from 'react';

// explicitando : JSX.Element como tipo de retorno para fins didáticos.
// TypeScript já os infere pelo retorno.
// function TituloDoFormulario(props: {children: string}): JSX.Element{
//   return <h2>{props.children}</h2>
// }

function App() {
  const temas: temaType[] = [
    {
      id: 1,
      nome: 'front-end' 
    },
    {
      id: 2,
      nome: 'back-end' 
    },
    {
      id: 3,
      nome: 'devops' 
    },
    {
      id: 4,
      nome: 'inteligência-artificial' 
    },
    {
      id: 5,
      nome: 'data-science' 
    },
    {
      id: 6,
      nome: 'cloud' 
    }
  ];

  const [eventos, setEventos] = useState<eventoType[]>([])

  function adicionarEvento(evento: eventoType): void{
    // eventos.push(evento);
    // console.log("eventos => \n", eventos);
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <header>
        <img src='/logo.png' alt=''></img>ks
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className='container'>
        {temas.map(tema => {
          if (!eventos.some(evento => evento.tema.id === tema.id)){
            return null;
          }
            return(<section key={'key' + tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {eventos.filter(evento => evento.tema.id === tema.id)              
                .map((evento, index) => (
                  <CardEvento evento={evento} key={index} />
              ))}
            </div>
          </section>)}
        )}
      </section>
    </>
  )
}

export default App