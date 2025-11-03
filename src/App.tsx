import './App.css'

function FormularioDeEvento() {
  return(
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor='nome'>Qual o nome do evento?</label>
        <input type='text' id='nome'/>
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