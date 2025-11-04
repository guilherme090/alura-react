import './label.estilos.css'

export function Label(props: {children: string, htmlFor: string}){
  const {children, htmlFor} = props;
  return (
    <label  className='label' htmlFor={htmlFor}>
      {children}
    </label>
  )
}