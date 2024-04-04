import { useEffect, useState } from "react";
import Boton from "../botones/Boton";
import { useNavigate } from "react-router-dom";
const Insert_aprendiz = () => {
  const navigate = useNavigate();
  const [documentos,set_documentos] = useState();
  const [estados,set_estados] = useState();
  const [formData, setFormData] = useState({
    numero_documento_aprendiz: "",
    codigo_ficha: "",
    id_tipo_documento: "",
    id_estado_aprendiz: "",
    id_obligacion_mensual: "",
    numero_consecutivo: "",
    numero_resolucion_adjudicacion: "",
    codigo_beneficio: "",
    nombre_completo_aprendiz: "",
    fecha_adjudicacion: "",
    numero_telefono_fijo: "",
    numero_telefono_movil: "",
    direccion_residencia_aprendiz: "",
    email_aprendiz: "",
    id_modalidad_formacion: "",
    fecha_inicio_formacion: "",
    fecha_inicio_productiva: "",
    fecha_fin_ficha: "",
    nivel_formacion: "",
    nombre_programa_formacion: "",
    numero_documento_instructor_lider: "",
    nombre_instructor_lider: "",
    email_instructor: "",
  });
  console.log(formData);
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/get_beneficios")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setDatos(data.data);
        } else {
          console.error("Los datos recibidos no son válidos.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);
  const [errors] = useState({}); // Asegúrate de inicializar errors
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/insertaraprendiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      } else {
        alert("Aprendiz creado correctamente");
        navigate("/adjudicados");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  useEffect(() => {
    fetch("http://localhost:4000/get_documentos")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          set_documentos(data.data);
        } else {
          console.error("Los datos recibidos no son válidos.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/get_estados")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          set_estados(data.data);
        } else {
          console.error("Los datos recibidos no son válidos.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);
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
                  value={formData.nombre_completo_aprendiz || ""}
                />
                {errors.nombre_completo_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.nombre_completo_aprendiz}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="id_tipo_documento" className="">
                  Tipo de Documento
                </label>
                <select
                  name="id_tipo_documento"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.id_tipo_documento && "is-invalid"
                  }`}
                  id="id_obligacion_mensual"
                  value={formData.id_tipo_documento || ""}
                >
                  <option value="">Selecciona...</option>
                  {documentos &&
                    documentos.map((item) => (
                      <option
                        key={item.id_tipo_documento}
                        value={item.id_tipo_documento}
                      >
                        {item.nombre_documento}
                      </option>
                    ))}
                </select>
                {errors.id_tipo_documento && (
                  <span className="invalid-feedback">
                    {errors.id_tipo_documento}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="numero_documento_aprendiz" className="">
                  Número de Documento del Aprendiz
                </label>
                <input
                  placeholder="Ingrese el numero de documento del aprendiz"
                  name="numero_documento_aprendiz"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_documento_aprendiz && "is-invalid"
                  } form-control`}
                  id="numero_documento_aprendiz"
                  value={formData.numero_documento_aprendiz || ""}
                />
                {errors.numero_documento_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.numero_documento_aprendiz}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="numero_consecutivo" className="form_label">
                  Número de Consecutivo del Aprendiz
                </label>
                <input
                  placeholder="Ingrese el numero de consecutivo del aprendiz"
                  name="numero_consecutivo"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_consecutivo && "is-invalid"
                  } form-control`}
                  id="numero_consecutivo"
                  value={formData.numero_consecutivo || ""}
                />
                {errors.numero_consecutivo && (
                  <span className="invalid-feedback">
                    {errors.numero_consecutivo}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="numero_telefono_fijo" className="">
                  Número de Teléfono Fijo
                </label>
                <input
                  placeholder="Ingrese el número de teléfono fijo"
                  name="numero_telefono_fijo"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_telefono_fijo && "is-invalid"
                  } form-control`}
                  id="numero_telefono_fijo"
                  value={formData.numero_telefono_fijo || ""}
                />
                {errors.numero_telefono_fijo && (
                  <span className="invalid-feedback">
                    {errors.numero_telefono_fijo}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="numero_telefono_movil" className="">
                  Número de Teléfono Móvil
                </label>
                <input
                  placeholder="Ingrese el número de teléfono móvil"
                  name="numero_telefono_movil"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_telefono_movil && "is-invalid"
                  } form-control`}
                  id="numero_telefono_movil"
                  value={formData.numero_telefono_movil || ""}
                />
                {errors.numero_telefono_movil && (
                  <span className="invalid-feedback">
                    {errors.numero_telefono_movil}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="direccion_residencia_aprendiz" className="">
                  Dirección de Residencia del Aprendiz
                </label>
                <input
                  placeholder="Ingrese la dirección de residencia del aprendiz"
                  name="direccion_residencia_aprendiz"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.direccion_residencia_aprendiz && "is-invalid"
                  } form-control`}
                  id="direccion_residencia_aprendiz"
                  value={formData.direccion_residencia_aprendiz || ""}
                />
                {errors.direccion_residencia_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.direccion_residencia_aprendiz}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="email_aprendiz" className="">
                  Correo Electrónico del Aprendiz
                </label>
                <input
                  placeholder="Ingrese el email del aprendiz"
                  name="email_aprendiz"
                  onChange={handleChange}
                  type="email"
                  required
                  className={` ${
                    errors.email_aprendiz && "is-invalid"
                  } form-control`}
                  id="email_aprendiz"
                  value={formData.email_aprendiz || ""}
                />
                {errors.email_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.email_aprendiz}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 datos_beneficio">
            <div className="">
              <p className="titulos">Datos de formación</p>
              <div className="container_input">
                <label htmlFor="codigo_ficha" className="">
                  Código de Ficha
                </label>
                <input
                  placeholder="Ingrese el codigo de ficha"
                  name="codigo_ficha"
                  onChange={handleChange}
                  type="text"
                  required
                  className={`form-control ${
                    errors.codigo_ficha && "is-invalid"
                  }`}
                  id="codigo_ficha"
                  value={formData.codigo_ficha || ""}
                />
                {errors.codigo_ficha && (
                  <span className="invalid-feedback">
                    {errors.codigo_ficha}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="id_modalidad_formacion" className="">
                  Modalidad de formación
                </label>
                <select
                  name="id_modalidad_formacion"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.id_modalidad_formacion && "is-invalid"
                  }`}
                  id="id_modalidad_formacion"
                  value={formData.id_modalidad_formacion || ""}
                >
                  <option value="">Selecciona...</option>
                  <option value="1">Presencial</option>
                  <option value="2">Virtual</option>
                </select>
                {errors.id_modalidad_formacion && (
                  <span className="invalid-feedback">
                    {errors.id_modalidad_formacion}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="fecha_inicio_formacion" className="">
                  Fecha de inicio de formación
                </label>
                <input
                  name="fecha_inicio_formacion"
                  onChange={handleChange}
                  type="date"
                  required
                  className={` ${
                    errors.fecha_inicio_formacion && "is-invalid"
                  } form-control`}
                  id="fecha_inicio_formacion"
                  value={formData.fecha_inicio_formacion || ""}
                />
                {errors.fecha_inicio_formacion && (
                  <span className="invalid-feedback">
                    {errors.fecha_inicio_formacion}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="fecha_inicio_productiva" className="">
                  Fecha de inicio etapa productiva
                </label>
                <input
                  name="fecha_inicio_productiva"
                  onChange={handleChange}
                  type="date"
                  required
                  className={` ${
                    errors.fecha_inicio_productiva && "is-invalid"
                  } form-control`}
                  id="fecha_inicio_productiva"
                  value={formData.fecha_inicio_productiva || ""}
                />
                {errors.fecha_inicio_productiva && (
                  <span className="invalid-feedback">
                    {errors.fecha_inicio_productiva}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="fecha_fin_ficha" className="">
                  Fecha fin de formación
                </label>
                <input
                  name="fecha_fin_ficha"
                  onChange={handleChange}
                  type="date"
                  required
                  className={` ${
                    errors.fecha_fin_ficha && "is-invalid"
                  } form-control`}
                  id="fecha_fin_ficha"
                  value={formData.fecha_fin_ficha || ""}
                />
                {errors.fecha_fin_ficha && (
                  <span className="invalid-feedback">
                    {errors.fecha_fin_ficha}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="nivel_formacion" className="">
                  Nivel de formación
                </label>
                <select
                  name="nivel_formacion"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.nivel_formacion && "is-invalid"
                  }`}
                  id="nivel_formacion"
                  value={formData.nivel_formacion || ""}
                >
                  <option value="">Selecciona...</option>
                  <option value="Técnico">Técnico</option>
                  <option value="Tecnólogo">Tecnólogo</option>
                </select>
                {errors.nivel_formacion && (
                  <span className="invalid-feedback">
                    {errors.nivel_formacion}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label
                  htmlFor="nombre_programa_formacion"
                  className="form_label"
                >
                  Nombre programa de formación
                </label>
                <input
                  placeholder="Ingrese el numero de resolución de adjudicación"
                  name="nombre_programa_formacion"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.nombre_programa_formacion && "is-invalid"
                  } form-control`}
                  id="nombre_programa_formacion"
                  value={formData.nombre_programa_formacion || ""}
                />
                {errors.nombre_programa_formacion && (
                  <span className="invalid-feedback">
                    {errors.nombre_programa_formacion}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label
                  htmlFor="numero_documento_instructor_lider"
                  className="form_label"
                >
                  Número documento instructor lider
                </label>
                <input
                  placeholder="Ingrese el numero de documento del instructor lider"
                  name="numero_documento_instructor_lider"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_documento_instructor_lider && "is-invalid"
                  } form-control`}
                  id="numero_documento_instructor_lider"
                  value={formData.numero_documento_instructor_lider || ""}
                />
                {errors.numero_documento_instructor_lider && (
                  <span className="invalid-feedback">
                    {errors.numero_documento_instructor_lider}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="nombre_instructor_lider" className="form_label">
                  Nombre completo instructor lider
                </label>
                <input
                  placeholder="Ingrese el nombre del instructor lider"
                  name="nombre_instructor_lider"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.nombre_instructor_lider && "is-invalid"
                  } form-control`}
                  id="nombre_instructor_lider"
                  value={formData.nombre_instructor_lider || ""}
                />
                {errors.nombre_instructor_lider && (
                  <span className="invalid-feedback">
                    {errors.nombre_instructor_lider}
                  </span>
                )}
              </div>
              <div className="container_input">
                <label htmlFor="email_instructor" className="">
                  Correo Electrónico instructor
                </label>
                <input
                  placeholder="Ingrese el email del aprendiz"
                  name="email_instructor"
                  onChange={handleChange}
                  type="email"
                  required
                  className={` ${
                    errors.email_instructor && "is-invalid"
                  } form-control`}
                  id="email_instructor"
                  value={formData.email_instructor || ""}
                />
                {errors.email_instructor && (
                  <span className="invalid-feedback">
                    {errors.email_instructor}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 datos_beneficio">
            <div className="">
              <p className="titulos ">Datos de beneficio</p>

              <div className="container_input">
                <label htmlFor="id_estado_aprendiz" className="">
                  Estado del Aprendiz
                </label>
                <select
                  name="id_estado_aprendiz"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.id_estado_aprendiz && "is-invalid"
                  }`}
                  id="id_estado_aprendiz"
                  value={formData.id_estado_aprendiz || ""}
                >
                   <option value="">Selecciona...</option>
                  {estados &&
                    estados.map((item) => (
                      <option
                        key={item.id_estado_aprendiz}
                        value={item.id_estado_aprendiz}
                      >
                        {item.nombre_estado_aprendiz}
                      </option>
                    ))}
                </select>
                {errors.id_estado_aprendiz && (
                  <span className="invalid-feedback">
                    {errors.id_estado_aprendiz}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="id_obligacion_mensual" className="">
                  Obligación Mensual
                </label>
                <select
                  name="id_obligacion_mensual"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.id_obligacion_mensual && "is-invalid"
                  }`}
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

              <div className="container_input">
                <label
                  htmlFor="numero_resolucion_adjudicacion"
                  className="form_label"
                >
                  Número de Resolución de Adjudicación
                </label>
                <input
                  placeholder="Ingrese el numero de resolución de adjudicación"
                  name="numero_resolucion_adjudicacion"
                  onChange={handleChange}
                  type="text"
                  required
                  className={` ${
                    errors.numero_resolucion_adjudicacion && "is-invalid"
                  } form-control`}
                  id="numero_resolucion_adjudicacion"
                  value={formData.numero_resolucion_adjudicacion || ""}
                />
                {errors.numero_resolucion_adjudicacion && (
                  <span className="invalid-feedback">
                    {errors.numero_resolucion_adjudicacion}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="codigo_beneficio" className="">
                  Seleccionar beneficio
                </label>
                <select
                  name="codigo_beneficio"
                  onChange={handleChange}
                  required
                  className={`form-control ${
                    errors.codigo_beneficio && "is-invalid"
                  }`}
                  id="id_obligacion_mensual"
                  value={formData.codigo_beneficio || ""}
                >
                  <option value="">Selecciona...</option>
                  {datos &&
                    datos.map((item) => (
                      <option
                        key={item.codigo_beneficio}
                        value={item.codigo_beneficio}
                      >
                        {item.nombre_beneficio}
                      </option>
                    ))}
                </select>
                {errors.codigo_beneficio && (
                  <span className="invalid-feedback">
                    {errors.codigo_beneficio}
                  </span>
                )}
              </div>

              <div className="container_input">
                <label htmlFor="fecha_adjudicacion" className="">
                  Fecha de Adjudicación
                </label>
                <input
                  name="fecha_adjudicacion"
                  onChange={handleChange}
                  type="date"
                  required
                  className={` ${
                    errors.fecha_adjudicacion && "is-invalid"
                  } form-control`}
                  id="fecha_adjudicacion"
                  value={formData.fecha_adjudicacion || ""}
                />
                {errors.fecha_adjudicacion && (
                  <span className="invalid-feedback">
                    {errors.fecha_adjudicacion}
                  </span>
                )}
              </div>
              <Boton
                textcolor="#ffffff"
                color="#39A900"
                texto="Agregar aprendiz"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Insert_aprendiz;
