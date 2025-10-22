/* Exporto boton que recibe como parametros el texto, 
  color de fondo y la funcion para manejar el click
  mas el id que identifica al boton para saber cual clickeo */


export const Boton = ({ text = "Botón", color = "gray", handleClick, id }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
  };


  return (
    <button style={estilos} onClick={()=>handleClick(id)}>
      {text}
    </button>
  )
}
