import './card-evento.estilos.css'
import type { temaType } from '../Tema'
import questionMarkCoverPicture from '../../assets/question-mark.png'

export type eventoType = {
      capa: string,
      tema: temaType,
      data: Date,
      titulo: string
}

export function CardEvento({evento}: {evento: eventoType}) {
    console.log(evento.capa.length);
    const imagemDeCapa = evento.capa.length > 0 ? evento.capa: questionMarkCoverPicture;
    return(
        <div className='card-evento'>
            <img src={imagemDeCapa} alt={evento.titulo}/>
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema? evento.tema.nome: null}
                </p>
                <p className='data'>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className='titulo'>
                    {evento.titulo}
                </h4>
            </div>
        </div>
    );
}