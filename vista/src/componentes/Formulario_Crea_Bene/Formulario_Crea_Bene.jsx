import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const FormularioCreaBeneficio = () => {
  const navigate = useNavigate();
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

      if (res.ok) {
        navigate("/adjudicados");
      } else {
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

    // Verificar si se ha seleccionado un archivo
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setBeneficio({
        ...beneficio,
        archivo_excel: selectedFile,
      });
    }

    // Actualizar otros campos del formulario
    setBeneficio({ ...beneficio, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="padre p-4">
      <div
        className="container d-flex justify-content-center"
        id="form-container"
      >
        <div className="col-md-5">
          <div className="container_form bg-light p-4 rounded text-center">
            <p className="titulo_beneficio text-dark font-weight-bold">
              BENEFICIO
            </p>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group mb-2 text-center" style={{ color: "#39A900" }}>
                <label htmlFor="codigo_beneficio" className="form_label mb-3">
                  Código beneficio
                </label>
                <input
                  onChange={handleChange}
                  name="codigo_beneficio"
                  type="text"
                  className={`form-control form_input ${
                    errors.codigo_beneficio ? "is-invalid" : ""
                  }`}
                  id="codigo_beneficio"
                  required
                  value={beneficio.codigo_beneficio}
                />
                {errors.codigo_beneficio && (
                  <span className="invalid-feedback">
                    {errors.codigo_beneficio}
                  </span>
                )}
              </div>
              <div className="form-group mb-2 text-center" style={{ color: "#39A900" }}>
                <label htmlFor="cupos_beneficio" className="form_label mb-3">
                  Ingrese número de cupos
                </label>
                <input
                  onChange={handleChange}
                  name="cupos_beneficio"
                  type="number"
                  className={`form-control form_input ${
                    errors.cupos_beneficio ? "is-invalid" : ""
                  }`}
                  id="numeroCupos"
                  required
                  value={beneficio.cupos_beneficio}
                />
                {errors.cupos_beneficio && (
                  <span className="invalid-feedback">
                    {errors.cupos_beneficio}
                  </span>
                )}
              </div>
              <div className="form-group mb-2 text-center" style={{ color: "#39A900" }}>
                <label
                  htmlFor="fecha_inicio_beneficio"
                  className="form_label mb-3"
                >
                  Fecha inicio beneficio
                </label>
                <input
                  onChange={handleChange}
                  name="fecha_inicio_beneficio"
                  type="date"
                  className={`form-control form_input ${
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
              </div>
              <div className="form-group text-center"style={{ color: "#39A900" }}>
                <label
                  htmlFor="fecha_fin_beneficio"
                  className="form_label mb-3"
                >
                  Fecha fin beneficio
                </label>
                <input
                  onChange={handleChange}
                  name="fecha_fin_beneficio"
                  type="date"
                  className={`form-control form_input ${
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
              </div>
              <div className="form-group text-center" style={{ color: "#39A900" }}>
                <label
                  htmlFor="archivo_excel"
                  className="form_label mb-3"
                >
                  Ruta del archivo de registro de adjudicados
                </label>
                <input
                  onChange={handleChange}
                  name="archivo_excel"
                  type="text"
                  className={`form-control form_input ${
                    errors.archivo_excel ? "is-invalid" : ""
                  }`}
                  id="archivo_excel"
                  required
                  value={beneficio.archivo_excel}
                />
                {errors.archivo_excel && (
                  <span className="invalid-feedback">
                    {errors.archivo_excel}
                  </span>
                )}
              </div>
              <button className="btn boton_crear m-2 btn-success"style={{ background: "#39A900" }} type="submit">
                CREAR
              </button>
              {successMessage && (
                <div className="text-success">{successMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCreaBeneficio;
