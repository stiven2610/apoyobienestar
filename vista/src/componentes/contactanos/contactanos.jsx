import { useState, } from "react";
import Navegacion from "../navIndex/navbar";
import "./styles.css"
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
    <Navegacion/>
    <div className="container ">
    <div  className="container-contactanos bg-light shadow   ">
      <h3 className="text-center ">Contáctanos</h3>
      <form onSubmit={handleSubmit}>
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre completo"
            value={formulario.nombre}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="form-label">Asunto</label>
          <input
            type="text"
            name="asunto"
            placeholder="Ingresa el asunto de tu solicitud"
            value={formulario.asunto}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            placeholder="Ingresa tu correo electronico"
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Ingrese un mensaje describiendo el motivo de su contacto "
            value={formulario.mensaje}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        <button type="submit" className="boton-contactos ">Enviar</button>
      </form>
    </div>
    </div>
    </>

  );
};

export default FormContactos;
