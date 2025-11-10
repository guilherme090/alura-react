import './lista-suspensa.estilos.css'
import type { temaType } from "../Tema";

type listaSuspensaType = {
    itens: temaType[],
} & React.SelectHTMLAttributes<HTMLSelectElement>

export function ListaSuspensa({ itens, ...rest}: listaSuspensaType) {
    return (
        <select className="lista-suspensa-form" defaultValue="" {...rest}>
            <option value="" disabled>Selecione uma opção</option>
            {itens.map((item) => 
                <option key={item.id} value={item.id}>{item.nome}</option>            
            )};
        </select>
    );
}