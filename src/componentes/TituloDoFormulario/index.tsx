import './titulo-do-formulario.estilos.css'

export function TituloDoFormulario(props: {children: string}){
  return ( 
  <h2 className='titulo-form'>
    {props.children}
  </h2>
  )
}