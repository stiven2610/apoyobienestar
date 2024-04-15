import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../botones/Boton";
import PropTypes from 'prop-types';

import "./styles.css";
import BackIcon from "../backIcon/BackIcon";

const Update_aprendiz = ({ aprendiz }) => {
  const [estados,set_estados] = useState();
  const [documentos,set_documentos] = useState();
  const [formData, setFormData] = useState({
    numero_documento_aprendiz: aprendiz.numero_documento_aprendiz || "",
    codigo_ficha: aprendiz.codigo_ficha || "",
    nombre_documento: aprendiz.nombre_documento ||"",
    id_tipo_documento: aprendiz.id_tipo_documento || "",
    id_estado_aprendiz: aprendiz.id_estado_aprendiz || "",
    nombre_estado : aprendiz.nombre_estado_aprendiz || "",
    id_obligacion_mensual: aprendiz.id_obligacion_mensual || "",
    nombre_obligacion_mensual: aprendiz.nombre_obligacion_mensual || "",
    numero_consecutivo: aprendiz.numero_consecutivo || "",
    numero_resolucion_adjudicacion: aprendiz.numero_resolucion_adjudicacion || "",
    codigo_beneficio: aprendiz.nombre_beneficio || "",
    nombre_completo_aprendiz: aprendiz.nombre_completo_aprendiz || "",
    fecha_adjudicacion: aprendiz.fecha_adjudicacion || "",
    numero_telefono_fijo: aprendiz.numero_telefono_fijo || "",
    numero_telefono_movil: aprendiz.numero_telefono_movil || "",
    direccion_residencia_aprendiz: aprendiz.direccion_residencia_aprendiz || "",
    email_aprendiz: aprendiz.email_aprendiz || "",
  });
Update_aprendiz.propTypes = {
  aprendiz: PropTypes.shape({
    numero_documento_aprendiz: PropTypes.number,
    codigo_ficha: PropTypes.number,
    id_tipo_documento: PropTypes.number,
    id_estao_aprendiz: PropTypes.number,
    id_obligacion_mensual: PropTypes.number,
    numero_consecutivo: PropTypes.number,
    numero_resolucion_adjudicacion: PropTypes.number,
    nombre_beneficio: PropTypes.string,
    nombre_completo_aprendiz: PropTypes.string,
    fecha_adjudicacion: PropTypes.string,
    numero_telefono_fijo: PropTypes.string,
    numero_telefono_movil: PropTypes.string,
    direccion_residencia_aprendiz: PropTypes.string,
    email_aprendiz: PropTypes.string,
  }).isRequired,
};

  const [errors,setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateField = (name, value) => {
      let errorMessage = "";
      // Validación específica para cada campo
      switch (name) {
        case "nombre_completo_aprendiz":
          // Validación para el nombre completo del aprendiz
          if (value.trim() === "") {
            errorMessage = "El nombre completo del aprendiz es requerido";
          }
          break;
        case "id_tipo_documento":
          // Validación para el tipo de documento
          if (!value) {
            errorMessage = "El tipo de documento es requerido";
          }
          break;
        // Añade más casos de validación para otros campos si es necesario
        default:
          break;
      }
      // Actualiza el estado de errores
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    };
    try {
      const res = await fetch("http://localhost:4000/actualizardatos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }else{
      alert("Datos del aprendiz actualizados correctamente")
      navigate('/novedades')
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
      <BackIcon/>
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
                className={`form-control ${errors.nombre_completo_aprendiz && "is-invalid"
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
                className={` ${errors.numero_documento_aprendiz && "is-invalid"
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
                className={` ${errors.numero_consecutivo && "is-invalid"} form-control`}
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
                className={` ${errors.numero_telefono_fijo && "is-invalid"} form-control`}
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
                className={` ${errors.numero_telefono_movil && "is-invalid"} form-control`}
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
                className={` ${errors.direccion_residencia_aprendiz && "is-invalid"
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
                className={` ${errors.email_aprendiz && "is-invalid"} form-control`}
                id="email_aprendiz"
                value={formData.email_aprendiz || ""}
              />
              {errors.email_aprendiz && (
                <span className="invalid-feedback">{errors.email_aprendiz}</span>
              )}
            </div>
            <Boton textcolor="#ffffff" color="#39A900"  texto="Actualizar datos" />
          </div>
        </div>

        <div className="col-md-6 datos_beneficio">

          <div className="">
            <p className="titulos ">Datos de beneficio</p>
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
                className={`form-control ${errors.codigo_ficha && "is-invalid"}`}
                id="codigo_ficha"
                value={formData.codigo_ficha || ""}
              />
              {errors.codigo_ficha && (
                <span className="invalid-feedback">{errors.codigo_ficha}</span>
              )}
            </div>

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
                className={`form-control ${errors.id_obligacion_mensual && "is-invalid"}`}
                id="id_obligacion_mensual"
                value={formData.id_obligacion_mensual || ""}
              >
                <option value={aprendiz.id_obligacion_mensual}>{aprendiz.nombre_obligacion_mensual}</option>
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
              <label htmlFor="numero_resolucion_adjudicacion" className="form_label">
                Número de Resolución de Adjudicación
              </label>
              <input
                placeholder="Ingrese el numero de resolución de adjudicación"
                name="numero_resolucion_adjudicacion"
                onChange={handleChange}
                type="text"
                required
                className={` ${errors.numero_resolucion_adjudicacion && "is-invalid"} form-control`}
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
             Nombre de beneficio
              </label>
              <input
                placeholder="Ingrese el código de beneficio"
                name="codigo_beneficio"
                onChange={handleChange}
                type="text"
                required
                className={`form-control ${errors.codigo_beneficio && "is-invalid"}`}
                id="codigo_beneficio"
                value={formData.codigo_beneficio || ""}
              />
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
                className={` ${errors.fecha_adjudicacion && "is-invalid"} form-control`}
                id="fecha_adjudicacion"
                value={formData.fecha_adjudicacion || ""}
              />
              {errors.fecha_adjudicacion && (
                <span className="invalid-feedback">
                  {errors.fecha_adjudicacion}
                </span>
              )}
            </div>
        <Boton textcolor="#ffffff" color="#39A900"  texto="Actualizar datos" />
      
          </div>

        </div>

      </div>

    </form>
     
    </>
  );

};

export default Update_aprendiz;
