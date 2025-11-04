import type { ReactNode } from "react";
import './lista-suspensa.estilos.css'

export function ListaSuspensa(props: {children: ReactNode}) {
    return (
        <select className="lista-suspensa-form">
            {props.children}
        </select>
    );
}