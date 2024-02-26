import Boton from "../botones/Boton";
import "./styles.css"
import { useState } from "react";
const Formulario_contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
    // Limpiar errores al cambiar el valor
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    let isValid = true;
    const newErrors = {};

    if (formulario.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
      isValid = false;
    }

    if (formulario.asunto.trim().length < 5) {
      newErrors.asunto = "El asunto debe tener al menos 5 caracteres";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formulario.email)) {
      newErrors.email = "El correo electrónico no es válido";
      isValid = false;
    }

    if (formulario.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado:", formulario);

    // Reiniciar el estado del formulario
    setFormulario({
      nombre: "",
      asunto: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <>
      <div className="container_contacta">
        <div className="container-contactanos">
          <h3 className="titulos">Contáctanos</h3>
          <form onSubmit={handleSubmit}>
            <label className="subtitulos">Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre completo"
              value={formulario.nombre}
              onChange={handleInputChange}
              className={`form-control ${errors.nombre && "is-invalid"}`}
              required
            />
            {errors.nombre && (
              <span className="invalid-feedback">{errors.nombre}</span>
            )}
            <label className="subtitulos">Asunto</label>
            <input
              type="text"
              name="asunto"
              placeholder="Ingresa el asunto de tu solicitud"
              value={formulario.asunto}
              onChange={handleInputChange}
              className={`form-control ${errors.asunto && "is-invalid"}`}
              required
            />
            {errors.asunto && (
              <span className="invalid-feedback">{errors.asunto}</span>
            )}
            <label className="subtitulos">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formulario.email}
              placeholder="Ingresa tu correo electronico"
              onChange={handleInputChange}
              className={`form-control ${errors.email && "is-invalid"}`}
              required
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email}</span>
            )}
            <label className="subtitulos">Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Ingrese un mensaje describiendo el motivo de su contacto"
              value={formulario.mensaje}
              onChange={handleInputChange}
              className={`form-control mb-3 ${
                errors.mensaje && "is-invalid"
              }`}
              required
            />
            {errors.mensaje && (
              <span className="invalid-feedback">{errors.mensaje}</span>
            )}
            <Boton
              texto="Enviar"
              color="#39A900"
              texcolor="#f8f8f8#"
              tamaño="20%"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario_contacto;
