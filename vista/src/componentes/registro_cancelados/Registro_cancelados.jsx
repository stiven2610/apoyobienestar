import  { useState, useEffect } from "react";

const Registro_cancelados = ({ datosNovedad }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  // Este efecto se ejecuta cada vez que datosNovedad cambia
  useEffect(() => {
    if (datosNovedad) {
      // Si datosNovedad tiene un valor, inicializa formData con sus datos
      setFormData({
        nombre_completo_aprendiz: datosNovedad.nombre_completo_aprendiz || "",
      });
    }
  }, [datosNovedad]);

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
                    errors && errors.nombre_completo_aprendiz && "is-invalid"
                  }`}
                  id="nombre_completo_aprendiz"
                  value={formData.nombre_completo_aprendiz || ""}
                />
                {errors && errors.nombre_completo_aprendiz && (
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
