import React, { useState } from 'react';

const FormularioCreacionTaller = () => {
  const [taller, setTaller] = useState({
    codigo_taller: "",
    fecha_taller: "",
    contrasenha_taller: "",
    tema_taller: ""
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica de envío de datos o cualquier otra acción necesaria
    // Puedes acceder a los datos del formulario en el estado taller

    console.log("Datos del formulario:", taller);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaller({
      ...taller,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: "" // Limpiar el mensaje de error al cambiar el valor del campo
    });
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="col-md-5" id="form-container">
          <div className="container_form bg-light p-4 rounded text-center">
            <p className="titulo_beneficio font-weight-bold" style={{ color: "#084416" }}>
              CREACIÓN DE TALLER
            </p>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group mb-2 text-center">
                <label htmlFor="codigo_taller" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Código de Taller
                </label>
                <input
                  placeholder="Ingrese el código de taller"
                  name="codigo_taller"
                  onChange={handleChange}
                  type="number"
                  required
                  className={`form-control form_input ${errors.codigo_taller && "is-invalid"}`}
                  id="codigo_taller"
                  value={taller.codigo_taller || ""}
                />
                {errors.codigo_taller && (
                  <span className="invalid-feedback">
                    {errors.codigo_taller}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="fecha_taller" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Fecha del Taller
                </label>
                <input
                  name="fecha_taller"
                  onChange={handleChange}
                  type="date"
                  required
                  className={`form-control form_input ${errors.fecha_taller && "is-invalid"}`}
                  id="fecha_taller"
                  value={taller.fecha_taller || ""}
                />
                {errors.fecha_taller && (
                  <span className="invalid-feedback">
                    {errors.fecha_taller}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="contrasenha_taller" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Contraseña del Taller
                </label>
                <input
                  placeholder="Ingrese la contraseña del taller"
                  name="contrasenha_taller"
                  onChange={handleChange}
                  type="password"
                  required
                  className={`form-control form_input ${errors.contrasenha_taller && "is-invalid"}`}
                  id="contrasenha_taller"
                  value={taller.contrasenha_taller || ""}
                />
                {errors.contrasenha_taller && (
                  <span className="invalid-feedback">
                    {errors.contrasenha_taller}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="tema_taller" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Tema del Taller
                </label>
                <textarea
                  placeholder="Ingrese el tema del taller"
                  name="tema_taller"
                  onChange={handleChange}
                  required
                  className={`form-control form_input ${errors.tema_taller && "is-invalid"}`}
                  id="tema_taller"
                  value={taller.tema_taller || ""}
                />
                {errors.tema_taller && (
                  <span className="invalid-feedback">
                    {errors.tema_taller}
                  </span>
                )}
              </div>

              <button
                className="btn boton_crear m-4 btn-success" style={{ background: "#39A900" }}
                type="submit"
              >
                Crear Taller
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioCreacionTaller;
