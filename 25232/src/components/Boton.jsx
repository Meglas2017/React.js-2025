export const Boton = ({ text = "Botón", color = "gray", handleClick, id }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
  };


  return (
    <button style={estilos} onClick={()=>handleClick(id)}>
      {text}
    </button>
  );
};
