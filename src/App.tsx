import './App.css'

function TituloDoFormulario(props: {children: string}) {
  return <h2>{props.children}</h2>
}

function Label(props: {children: string, htmlFor: string}){
  const {children, htmlFor} = props;
  return <label htmlFor={htmlFor}>{children}</label>
}

function FormularioDeEvento() {
  return(
    <form className='form-evento'>
        <TituloDoFormulario>
          Preencha para criar um evento.
        </TituloDoFormulario>
      <fieldset>
        <Label htmlFor='nome'>
          Qual o nome do evento?
        </Label>
        <input type='text' id='nome' placeholder='Summer dev hits'/>
      </fieldset>
    </form>
  );
}

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