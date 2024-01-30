import React, { useState } from 'react';

const FormCreacionAprendiz = () => {
  const [formData, setFormData] = useState({
    numero_documento_aprendiz: '',
    codigo_ficha: '',
    id_tipo_documento: '',
    id_estado_aprendiz: '',
    id_obligacion_mensual: '',
    numero_consecutivo: '',
    numero_resolucion_adjudicacion: '',
    codigo_beneficio: '',
    nombre_completo_aprendiz: '',
    fecha_adjudicacion: '',
    numero_telefono_fijo: '',
    numero_telefono_movil: '',
    direccion_residencia_aprendiz: '',
    email_aprendiz: '',
    user_insert: '',
    fecha_insert: '',
    user_update: '',
    fecha_update: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Agrega aquí la lógica para enviar los datos a tu servidor
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="col-md-5" id="form-container">
        <div className="container_form bg-light p-4 rounded text-center">
          <p className="titulo_beneficio font-weight-bold" style={{ color: "#084416" }}>
            CREACIÓN DE TALLER
          </p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group mb-2 text-center">
              <label htmlFor="numero_documento_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                Numero de Documento del Aprendiz
              </label>
              <input
                placeholder="Ingrese el numero de documento del aprendiz"
                name="numero_documento_aprendiz"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.numero_documento_aprendiz && "is-invalid"}`}
                id="numero_documento_aprendiz"
                value={formData.numero_documento_aprendiz || ""}
              />
              {errors.numero_documento_aprendiz && (
                <span className="invalid-feedback">
                  {errors.numero_documento_aprendiz}
                </span>
              )}
            </div>


            <div className="form-group mb-2 text-center">
              <label htmlFor="codigo_ficha" className="form_label mb-3" style={{ color: "#39A900" }}>
                Codigo de Ficha
              </label>
              <input
                placeholder="Ingrese el codigo de ficha"
                name="codigo_ficha"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.codigo_ficha && "is-invalid"}`}
                id="codigo_ficha"
                value={formData.codigo_ficha || ""}
              />
              {errors.codigo_ficha && (
                <span className="invalid-feedback">
                  {errors.codigo_ficha}
                </span>
              )}
            </div>


            <button
              className="btn boton_crear m-4 btn-success"
              style={{ background: "#39A900" }}
              type="submit"
            >
              Crear Taller
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCreacionAprendiz;
