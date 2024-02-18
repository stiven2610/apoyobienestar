import  { useState } from 'react';

const Formulario_insert_aprendiz= () => {
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

  const [errors, ] = useState({}); // Asegúrate de inicializar errors
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
            CREACION APRENDIZ
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
              <label htmlFor="nombre_completo_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                Nombre completo del aprendiz
              </label>
              <input
                placeholder="Ingrese el nombre completo del aprendiz"
                name="nombre_completo_aprendiz"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.nombre_completo_aprendiz && "is-invalid"}`}
                id="nombre_completo_aprendiz"
                value={formData.nombre_completo_aprendiz || ""}
              />
              {errors.nombre_completo_aprendiz && (
                <span className="invalid-feedback">
                  {errors.nombre_completo_aprendiz}
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

            <div className="form-group mb-2 text-center">
              <label htmlFor="id_tipo_documento" className="form_label mb-3" style={{ color: "#39A900" }}>
                Tipo de Documento
              </label>
              <select
                name="id_tipo_documento"
                onChange={handleChange}
                required
                className={`form-control form_input ${errors.id_tipo_documento && "is-invalid"}`}
                id="id_tipo_documento"
                value={formData.id_tipo_documento || ""}
              >
                <option value="">Selecciona...</option>
                <option value="1">Cedula de Ciudadania</option>
                <option value="2">Tarjeta de identidad</option>
              </select>
              {errors.id_tipo_documento && (
                <span className="invalid-feedback">
                  {errors.id_tipo_documento}
                </span>
              )}
            </div>
            <div className="form-group mb-2 text-center">
              <label htmlFor="id_estado_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                Estado del Aprendiz
              </label>
              <select
                name="id_estado_aprendiz"
                onChange={handleChange}
                required
                className={`form-control form_input ${errors.id_estado_aprendiz && "is-invalid"}`}
                id="id_estado_aprendiz"
                value={formData.id_estado_aprendiz || ""}
              >
                <option value="">Selecciona...</option>
                <option value="1">Etapa Lectiva</option>
                <option value="2">Mes de Gracia</option>
                <option value="3">Suspendido</option>
                <option value="4">Proyecto Productivo</option>
              </select>
              {errors.id_estado_aprendiz && (
                <span className="invalid-feedback">
                  {errors.id_estado_aprendiz}
                </span>
              )}
            </div>
            <div className="form-group mb-2 text-center">
              <label htmlFor="id_estado_aprendiz" className="form_label mb-3" style={{ color: "#39A900" }}>
                obligación mensual
              </label>
              <select
                name="id_obligacion_mensual"
                onChange={handleChange}
                required
                className={`form-control form_input ${errors.id_obligacion_mensual && "is-invalid"}`}
                id="id_obligacion_mensual"
                value={formData.id_obligacion_mensual || ""}
              >
                <option value="">Selecciona...</option>
                <option value="1">Taller Mensual</option>
                <option value="2">Plan de Actividades</option>

              </select>
              {errors.id_obligacion_mensual && (
                <span className="invalid-feedback">
                  {errors.id_obligacion_mensual}
                </span>
              )}
            </div>
            <div className="form-group mb-2 text-center">
              <label htmlFor="numero_consecutivo" className="form_label mb-3" style={{ color: "#39A900" }}>
                Numero de consecutivo del aprendiz
              </label>
              <input
                placeholder="Ingrese el numero de consecutivo del aprendiz"
                name="numero_consecutivo"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.numero_consecutivo && "is-invalid"}`}
                id="numero_consecutivo"
                value={formData.numero_consecutivo || ""}
              />
              {errors.numero_consecutivo && (
                <span className="invalid-feedback">
                  {errors.numero_consecutivo}
                </span>
              )}
            </div>
            <div className="form-group mb-2 text-center">
              <label htmlFor="numero_resolucion_adjudicacion" className="form_label mb-3" style={{ color: "#39A900" }}>
                Numero de resolución de adjudicación
              </label>
              <input
                placeholder="Ingrese el numero de resolución de adjudicación"
                name="numero_resolucion_adjudicacion"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.numero_resolucion_adjudicacion && "is-invalid"}`}
                id="numero_resolucion_adjudicacion"
                value={formData.numero_resolucion_adjudicacion || ""}
              />
              {errors.numero_resolucion_adjudicacion && (
                <span className="invalid-feedback">
                  {errors.numero_resolucion_adjudicacion}
                </span>
              )}
            </div>
            <div className="form-group mb-2 text-center">
              <label htmlFor="codigo_beneficio" className="form_label mb-3" style={{ color: "#39A900" }}>
                Código de Beneficio
              </label>
              <input
                placeholder="Ingrese el código de beneficio"
                name="codigo_beneficio"
                onChange={handleChange}
                type="text"
                required
                className={`form-control form_input ${errors.codigo_beneficio && "is-invalid"}`}
                id="codigo_beneficio"
                value={formData.codigo_beneficio || ""}
              />
              {errors.codigo_beneficio && (
                <span className="invalid-feedback">
                  {errors.codigo_beneficio}
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
                value={formData.fecha_adjudicacion || ""}
              />
              {errors.fecha_adjudicacion && (
                <span className="invalid-feedback">
                  {errors.fecha_adjudicacion}
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
                type="text"
                required
                className={`form-control form_input ${errors.numero_telefono_fijo && "is-invalid"}`}
                id="numero_telefono_fijo"
                value={formData.numero_telefono_fijo || ""}
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
                type="text"
                required
                className={`form-control form_input ${errors.numero_telefono_movil && "is-invalid"}`}
                id="numero_telefono_movil"
                value={formData.numero_telefono_movil || ""}
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
                value={formData.direccion_residencia_aprendiz || ""}
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
                value={formData.email_aprendiz || ""}
              />
              {errors.email_aprendiz && (
                <span className="invalid-feedback">
                  {errors.email_aprendiz}
                </span>
              )}
            </div>

            <button
              className="btn boton_crear m-4 btn-success"
              style={{ background: "#39A900" }}
              type="submit"
            >
              Crear Aprendiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario_insert_aprendiz;
