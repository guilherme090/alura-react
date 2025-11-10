import { TituloDoFormulario } from '../TituloDoFormulario';
import { Label } from '../Label';
import { CampoDeEntrada } from '../CampoDeEntrada';
import './formulario-de-evento.estilos.css'
import { CampoDeFormulario } from '../CampoDeFormulario';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';
import { type temaType } from '../Tema';
import type { eventoType } from '../CardEvento';

type formularioDeEventoType = {
  temas: temaType[],
  aoSubmeter: (evento: eventoType) => void
}

export function FormularioDeEvento({temas, aoSubmeter} : formularioDeEventoType){

  function onFormEvento(formData: FormData){
    // console.log(formData);

    const evento: eventoType = {
      capa: formData.get('capa')?.toString() || '',
      tema: temas.find(item => item.id.toString() === formData.get('temaEvento'))!,
      data: new Date(formData.get('dataEvento')?.toString() || ''),
      titulo: formData.get('nomeEvento')?.toString() || ''
    }

    aoSubmeter(evento);
  }

  return(
    <form className='form-evento' action={onFormEvento}>
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
          <Label htmlFor='capa'>
            Qual o HTML da capa do evento?
          </Label>
          <CampoDeEntrada
            type='text'
            id='capa'
            placeholder='http://...'
            name='capa'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>
            Data do evento
          </Label>
          <CampoDeEntrada 
            type='date' 
            id='dataEvento' 
            name='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='temaEvento'>
            Tema do Evento
          </Label>
          <ListaSuspensa id='temaEvento' name='temaEvento' itens={temas}>
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