import type { InputHTMLAttributes } from "react";
import './campo-entrada.estilos.css'

export function CampoDeEntrada(props: InputHTMLAttributes<HTMLInputElement>){
  return (
    <input className='campo-entrada-form' 
      {...props} 
    />
  )
}