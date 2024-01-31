import React, { useState } from 'react';

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
    <div className="container mt-4 bg-light p-4 rounded">
      <h2 className="text-center mb-4">Contactanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Asunto</label>
          <input
            type="text"
            name="asunto"
            value={formulario.asunto}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <input
            type="text"
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
};

export default FormContactos;
