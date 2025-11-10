import './tema.estilos.css'

export type temaType = {
    id: number,
    nome: string
}

export function Tema({tema}: {tema: temaType}){
    return(
        <h3 className="titulo-tema">{tema.nome}</h3>
    )
}