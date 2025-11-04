import { TituloDoFormulario } from '../TituloDoFormulario';
import { Label } from '../Label';
import { CampoDeEntrada } from '../CampoDeEntrada';
import './formulario-de-evento.estilos.css'
import { CampoDeFormulario } from '../CampoDeFormulario';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';

export function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <TituloDoFormulario>
        Preencha para criar um evento.
      </TituloDoFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Qual o nome do evento?
          </Label>

          <CampoDeEntrada 
            type='text' 
            id='nomeEvento' 
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>
            Data do evento
          </Label>
          <CampoDeEntrada 
            type='date' 
            id='dataEvento' 
            placeholder='Summer dev hits'
            name='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='temaEvento'>
            Tema do Evento
          </Label>
          <ListaSuspensa>
            <option value="Um">1</option>
            <option value="Dois">2</option>
            <option value="Três">3</option>
          </ListaSuspensa>
        </CampoDeFormulario>

        
      </div>

      <div className='acoes'>
        <Botao>
          Criar Evento
        </Botao>
      </div>
    </form>
  );
}