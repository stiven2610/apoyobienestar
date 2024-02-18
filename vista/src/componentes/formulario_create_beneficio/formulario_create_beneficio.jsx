import { useState } from "react";
import Boton from "../botones/Boton";
import "./styles.css";
const Formulario_create_beneficio= () => {
  const [beneficio, setBeneficio] = useState({
    codigo_beneficio: "",
    cupos_beneficio: "",
    fecha_inicio_beneficio: "",
    fecha_fin_beneficio: "",
    archivo_excel: "",
  });
  const [errors, setErrors] = useState({
    codigo_beneficio: "",
    cupos_beneficio: "",
    fecha_inicio_beneficio: "",
    fecha_fin_beneficio: "",
    archivo_excel: "",
  });
  const [successMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/beneficio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(beneficio),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const fieldWithError = errorData.field;
        setErrors({
          ...errors,
          [fieldWithError]: errorData.message,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setBeneficio({
        ...beneficio,
        archivo_excel: selectedFile,
      });
    }

    setBeneficio({ ...beneficio, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <>
      <div className="container_beneficio">
        <div className="container_bene">
          <p className="titulos">BENEFICIO</p>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
              <label htmlFor="nombre_beneficio" className="subtitulos">
                Nombre Beneficio
              </label>
              <input
                onChange={handleChange}
                name="nombre_beneficio"
                type="text"
                className={`form-control  ${
                  errors.nombre_beneficio ? "is-invalid" : ""
                }`}
                id="nombre_beneficio"
                required
                value={beneficio.nombre_beneficio}
              />
              {errors.nombre_beneficio && (
                <span className="invalid-feedback">
                  {errors.nombre_beneficio}
                </span>
              )}
            <label htmlFor="cupos_beneficio" className="subtitulos">
              Ingrese número de cupos
            </label>
            <input
              onChange={handleChange}
              name="cupos_beneficio"
              type="number"
              className={`form-control  ${
                errors.cupos_beneficio ? "is-invalid" : ""
              }`}
              id="numeroCupos"
              required
              value={beneficio.cupos_beneficio}
            />
            {errors.cupos_beneficio && (
              <span className="invalid-feedback">{errors.cupos_beneficio}</span>
            )}
            <label htmlFor="fecha_inicio_beneficio" className="subtitulos">
              Fecha inicio
            </label>
            <input
              onChange={handleChange}
              name="fecha_inicio_beneficio"
              type="date"
              className={`form-control  ${
                errors.fecha_inicio_beneficio ? "is-invalid" : ""
              }`}
              id="fechaInicio"
              required
              value={beneficio.fecha_inicio_beneficio}
            />
            {errors.fecha_inicio_beneficio && (
              <span className="invalid-feedback">
                {errors.fecha_inicio_beneficio}
              </span>
            )}
            <label htmlFor="fecha_fin_beneficio" className="subtitulos">
              Fecha fin
            </label>
            <input
              onChange={handleChange}
              name="fecha_fin_beneficio"
              type="date"
              className={`form-control  ${
                errors.fecha_fin_beneficio ? "is-invalid" : ""
              }`}
              id="fechaFin"
              required
              value={beneficio.fecha_fin_beneficio}
            />
            {errors.fecha_fin_beneficio && (
              <span className="invalid-feedback">
                {errors.fecha_fin_beneficio}
              </span>
            )}
            <label htmlFor="archivo_excel" className="subtitulos">
              Ruta del archivo de registro de adjudicados
            </label>
            <input
              onChange={handleChange}
              name="archivo_excel"
              type="text"
              className={`form-control  mb-3 ${
                errors.archivo_excel ? "is-invalid" : ""
              }`}
              id="archivo_excel"
              required
              value={beneficio.archivo_excel}
            />
            {errors.archivo_excel && (
              <span className="invalid-feedback">{errors.archivo_excel}</span>
            )}
            <Boton texto="Crear" tamaño="30%" color="#41be07" textcolor="#fefefe" />
            {successMessage && (
              <div className="text-success">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario_create_beneficio;
