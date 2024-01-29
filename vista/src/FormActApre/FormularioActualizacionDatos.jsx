import React, { useState } from 'react';

const FormActualizacionDatos = () => {
  const [user, setUser] = useState({
    numero_documento_aprendiz: "",
    obligacion_mensual: "",
    codigo_ficha: "",
    codigo_beneficio: "",
    tipo_documento: "",
    nombre_completo_aprendiz: "",
    fecha_adjudicacion: "",
    id_modalidad: "",
    numero_telefono_fijo: "",
    numero_telefono_movil: "",
    direccion_residencia_aprendiz: "",
    email_aprendiz: ""
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí debes agregar la lógica de envío de datos o cualquier otra acción necesaria
    // Puedes acceder a los datos del formulario en el estado user

    console.log("Datos del formulario:", user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
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
              ACTUALIZACION DE DATOS DEL APRENDIZ
            </p>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group mb-2 text-center">
                <label htmlFor="numero_documento_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Número de Documento
                </label>
                <input
                  placeholder="Número de documento"
                  name="numero_documento_aprendiz"
                  onChange={handleChange}
                  type="tel"
                  required
                  readOnly
                  className={`form-control form_input ${errors.numero_documento_aprendiz && "is-invalid"}`}
                  id="numero_documento_aprendiz"
                  value={user.numero_documento_aprendiz || ""}
                />
                {errors.numero_documento_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.numero_documento_aprendiz}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="obligacion_mensual" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Obligación Mensual
                </label>
                <select
                  name="obligacion_mensual"
                  onChange={handleChange}
                  required
                  readOnly
                  className={`form-control form_input ${errors.obligacion_mensual && "is-invalid"}`}
                  id="obligacion_mensual"
                  value={user.obligacion_mensual || ""}
                >
                  <option value="">Taller mensual</option>
                 
                </select>
                {errors.obligacion_mensual && (
                  <span className="invalid-feedback">
                    {errors.obligacion_mensual}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="codigo_ficha" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Código de Ficha
                </label>
                <input
                  placeholder="Código de ficha"
                  name="codigo_ficha"
                  onChange={handleChange}
                  type="number"
                  required
                  readOnly
                  className={`form-control form_input ${errors.codigo_ficha && "is-invalid"}`}
                  id="codigo_ficha"
                  value={user.codigo_ficha || ""}
                />
                {errors.codigo_ficha && (
                  <span className="invalid-feedback">
                    {errors.codigo_ficha}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="codigo_beneficio" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Código de Beneficio
                </label>
                <input
                  placeholder="Código de beneficio"
                  name="codigo_beneficio"
                  onChange={handleChange}
                  type="number"
                  required
                  readOnly
                  className={`form-control form_input ${errors.codigo_beneficio && "is-invalid"}`}
                  id="codigo_beneficio"
                  value={user.codigo_beneficio || ""}
                />
                {errors.codigo_beneficio && (
                  <span className="invalid-feedback">
                    {errors.codigo_beneficio}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="tipo_documento" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Tipo de Documento
                </label>
                <select
                  name="tipo_documento"
                  onChange={handleChange}
                  required
                  className={`form-control form_input ${errors.tipo_documento && "is-invalid"}`}
                  id="tipo_documento"
                  value={user.tipo_documento || ""}
                >
                  <option value="">Seleccionar</option>
                  <option value="1">Cedula de Ciudadania</option>
                  <option value="2">Pasaporte</option>
                  <option value="3">PPT</option>
                  <option value="2">Cedula de extranjeria</option>
                </select>
                {errors.tipo_documento && (
                  <span className="invalid-feedback">
                    {errors.tipo_documento}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="nombre_completo_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Nombre Completo del Aprendiz
                </label>
                <input
                  placeholder="Nombre completo del aprendiz"
                  name="nombre_completo_aprendiz"
                  onChange={handleChange}
                  type="text"
                  required
                  className={`form-control form_input ${errors.nombre_completo_aprendiz && "is-invalid"}`}
                  id="nombre_completo_aprendiz"
                  value={user.nombre_completo_aprendiz || ""}
                />
                {errors.nombre_completo_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.nombre_completo_aprendiz}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="fecha_adjudicacion" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Fecha de Adjudicación
                </label>
                <input
                  name="fecha_adjudicacion"
                  onChange={handleChange}
                  type="date"
                  required
                  className={`form-control form_input ${errors.fecha_adjudicacion && "is-invalid"}`}
                  id="fecha_adjudicacion"
                  value={user.fecha_adjudicacion || ""}
                />
                {errors.fecha_adjudicacion && (
                  <span className="invalid-feedback">
                    {errors.fecha_adjudicacion}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="id_modalidad" className="form_label mb-3" style={{ color: "#39A900" }}>
                   Modalidad de formación
                </label>
                <input
                  placeholder="Modalidad de formación"
                  name="id_modalidad"
                  onChange={handleChange}
                  type="number"
                  className={`form-control form_input ${errors.id_modalidad && "is-invalid"}`}
                  id="id_modalidad"
                  value={user.id_modalidad || ""}
                />
                {errors.id_modalidad && (
                  <span className="invalid-feedback">
                    {errors.id_modalidad}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="numero_telefono_fijo" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Número de Teléfono Fijo
                </label>
                <input
                  placeholder="Ingrese el número de teléfono fijo"
                  name="numero_telefono_fijo"
                  onChange={handleChange}
                  type="tel"
                  required
                  className={`form-control form_input ${errors.numero_telefono_fijo && "is-invalid"}`}
                  id="numero_telefono_fijo"
                  value={user.numero_telefono_fijo || ""}
                />
                {errors.numero_telefono_fijo && (
                  <span className="invalid-feedback">
                    {errors.numero_telefono_fijo}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="numero_telefono_movil" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Número de Teléfono Móvil
                </label>
                <input
                  placeholder="Ingrese el número de teléfono móvil"
                  name="numero_telefono_movil"
                  onChange={handleChange}
                  type="tel"
                  required
                  className={`form-control form_input ${errors.numero_telefono_movil && "is-invalid"}`}
                  id="numero_telefono_movil"
                  value={user.numero_telefono_movil || ""}
                />
                {errors.numero_telefono_movil && (
                  <span className="invalid-feedback">
                    {errors.numero_telefono_movil}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="direccion_residencia_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Dirección de Residencia del Aprendiz
                </label>
                <input
                  placeholder="Ingrese la dirección de residencia del aprendiz"
                  name="direccion_residencia_aprendiz"
                  onChange={handleChange}
                  type="text"
                  required
                  className={`form-control form_input ${errors.direccion_residencia_aprendiz && "is-invalid"}`}
                  id="direccion_residencia_aprendiz"
                  value={user.direccion_residencia_aprendiz || ""}
                />
                {errors.direccion_residencia_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.direccion_residencia_aprendiz}
                  </span>
                )}
              </div>

              <div className="form-group mb-2 text-center">
                <label htmlFor="email_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                  Email del Aprendiz
                </label>
                <input
                  placeholder="Ingrese el email del aprendiz"
                  name="email_aprendiz"
                  onChange={handleChange}
                  type="email"
                  required
                  className={`form-control form_input ${errors.email_aprendiz && "is-invalid"}`}
                  id="email_aprendiz"
                  value={user.email_aprendiz || ""}
                />
                {errors.email_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.email_aprendiz}
                  </span>
                )}
              </div>

              <button
                className="btn boton_crear m-4 btn-success" style={{ background: "#39A900" }}
                type="submit"
              >
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormActualizacionDatos;
