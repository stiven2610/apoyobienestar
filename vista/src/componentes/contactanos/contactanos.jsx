import { useState, } from "react";
import Boton from "../botones/Boton";
import "./styles.css";
const FormContactos = () => {


  const [formulario, setFormulario] = useState({
    nombre: '',
    asunto: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario, como enviar el correo electrónico a través de una API.
    // También puedes reiniciar el estado del formulario después de enviar el formulario
    setFormulario({
      nombre: '',
      asunto: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <>
    <div className="container_contacta ">
    <div  className="container-contactanos  ">
      <h3 className="titulos">Contáctanos</h3>
      <form onSubmit={handleSubmit}>
          <label className="subtitulos">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre completo"
            value={formulario.nombre}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="subtitulos">Asunto</label>
          <input
            type="text"
            name="asunto"
            placeholder="Ingresa el asunto de tu solicitud"
            value={formulario.asunto}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="subtitulos">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            placeholder="Ingresa tu correo electronico"
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="subtitulos">Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Ingrese un mensaje describiendo el motivo de su contacto "
            value={formulario.mensaje}
            onChange={handleInputChange}
            className="form-control mb-3"
            required
          />
<Boton texto="Enviar" color="#39A900"  texcolor="#f8f8f8#" tamaño="20%"/>
      </form>
    </div>
    </div>
    </>

  );
};

export default FormContactos;
