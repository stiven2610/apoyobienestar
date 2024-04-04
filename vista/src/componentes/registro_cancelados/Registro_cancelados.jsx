import { useState } from "react";

const Registro_cancelados = ({ datosNovedad }) => {
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    nombre_completo_aprendiz: datosNovedad.nombre_completo_aprendiz || "",
  });
  const handleSubmit = (event) => {
    // Aquí puedes manejar la lógica para enviar el formulario
    event.preventDefault();
    // Por ejemplo:
    console.log("Formulario enviado");
  };

  const handleChange = (event) => {
    // Aquí puedes manejar los cambios en los campos del formulario
    // Por ejemplo:
    console.log("Cambio detectado en:", event.target.name);
  };

  // Suponiendo que `formData`, `errors` y `documentos` están definidos previamente

  return (
    <>
      <form className="container" onSubmit={handleSubmit} autoComplete="off">
        <div className="row">
          <div className="col-md-6 datos_beneficio">
            <div className="">
              <p className="titulos">Datos personales </p>
              <div className="container_input">
                <label htmlFor="nombre_completo_aprendiz" className="">
                  Nombre Completo del Aprendiz
                </label>
                <input
                  placeholder="Ingrese el nombre completo del aprendiz"
                  name="nombre_completo_aprendiz"
                  onChange={handleChange}
                  type="text"
                  required
                  className={`form-control ${
                    errors.nombre_completo_aprendiz && "is-invalid"
                  }`}
                  id="nombre_completo_aprendiz"
                  value={datosNovedad.nombre_completo_aprendiz || ""}
                />
                {errors.nombre_completo_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.nombre_completo_aprendiz}
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Registro_cancelados;
