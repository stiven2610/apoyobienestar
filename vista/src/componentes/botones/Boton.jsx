import React from 'react';
import "./styles.css";
// Definición del componente Boton
const Boton = ({ texto, icono, color, textcolor }) => {
  return (
    <button className='boton' style={{ backgroundColor: color , color: textcolor}}>
      {icono && <span className="icon">{icono}</span>}
      {texto}
    </button>
  );
}

export default Boton;
