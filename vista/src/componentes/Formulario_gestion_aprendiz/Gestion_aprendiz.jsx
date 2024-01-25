import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Formulario_gestion_aprendiz = () => {
  const location = useLocation();
  console.log(location)
  console.log(location)
  console.log(location)
  const registro = location.state.registro;
console.log(location)
  // Define el estado local para los campos del formulario
  const [formData, setFormData] = useState({
    numeroDocumento: registro.numero_documento_aprendiz || "",
    // ... otros campos ...
  });

  // Controlador de evento para el campo numeroDocumento
  const handleNumeroDocumentoChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      numeroDocumento: value,
    });
  };

  // ... otros controladores de eventos para los demás campos ...

  return (
    <div className="container mt-5">
      <h1>Gestión de Datos</h1>
      <form className="bg-light p-5 shadow-lg m-4">
        {/* ... Otros campos del formulario */}
        <div className="mb-3">
          <label htmlFor="numeroDocumento" className="form-label">
            NÚMERO_DOCUMENTO
          </label>
          <input
            type="text"
            className="form-control"
            id="numeroDocumento"
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleNumeroDocumentoChange}
          />
        </div>

        {/* ... otros campos del formulario ... */}

        <button type="submit" className="btn btn-primary">
          Actualizar Datos
        </button>
      </form>
    </div>
  );
};

export default Formulario_gestion_aprendiz;
