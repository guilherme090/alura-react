import type { ReactNode } from 'react'
import './campo-formulario.estilos.css'

export function CampoDeFormulario(props: {children: ReactNode}) {
    const {children} = props
    return (
        <fieldset className='campo-form'>
            {children}
        </fieldset>
    )
}