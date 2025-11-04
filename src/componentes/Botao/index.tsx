import './botao.estilos.css'

export function Botao(props:{children: string}) {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}