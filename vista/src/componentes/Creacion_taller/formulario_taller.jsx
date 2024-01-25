import { useState } from "react";

const FormularioTaller = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    codigo_taller: "",
    tema_taller: "",
    fecha_taller: "",
    contrasenha_taller: "",
  });

  // Estado para manejar los errores
  const [errors, setErrors] = useState({
    codigo_taller: "",
  });
console.log(errors)
console.log(errors)
console.log(errors)
// Estado para manejar el resultado de la solicitud a la API
  const [result, setResult] = useState(null);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar el error si el usuario comienza a escribir en el campo
    setErrors({ ...errors, [name]: "" });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/creaciontaller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // La solicitud se completó exitosamente
        setResult("Taller creado");
        // Puedes realizar otras acciones después de un envío exitoso
      } else {
        // La solicitud tuvo un error
        setResult("Error en la solicitud");
        // Manejar errores específicos aquí
        if (response.status === 400) {
          const errorData = await response.json();
          setErrors({ ...errors, codigo_taller: errorData.error });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error en la solicitud");
    }
  };

  return (
    <div className="padre p-4">
      <div className="container d-flex justify-content-center">
        <div className="col-md-5">
          <div className="container_form bg-light p-4 rounded text-center">
            <p className="titulo_beneficio text-success font-weight-bold">
              TALLER
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2 text-center">
                <label htmlFor="codigo_taller" className="form_label mb-3">
                  Numero Taller
                </label>
                <input
                  type="number"
                  className={`form-control form_input ${
                    errors.codigo_taller ? "is-invalid" : ""
                  }`}
                  id="codigo_taller"
                  name="codigo_taller"
                  value={formData.codigo_taller}
                  onChange={handleChange}
                />
                {errors.codigo_taller && (
                  <div className="invalid-feedback">{errors.codigo_taller}</div>
                )}
              </div>
              <div className="form-group mb-2 text-center">
                <label htmlFor="tema_taller" className="form_label mb-3">
                  Tema taller
                </label>
                <input
                  type="text"
                  className="form-control form_input"
                  id="tema_taller"
                  name="tema_taller"
                  value={formData.tema_taller}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2 text-center">
                <label htmlFor="fecha_taller" className="form_label mb-3">
                  Fecha taller
                </label>
                <input
                  type="date"
                  className="form-control form_input"
                  id="fecha_taller"
                  name="fecha_taller"
                  value={formData.fecha_taller}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2 text-center">
                <label htmlFor="contrasenha_taller" className="form_label mb-3">
                  Contraseña Taller
                </label>
                <input
                  type="password"
                  className="form-control form_input"
                  id="contrasenha_taller"
                  name="contrasenha_taller"
                  value={formData.contrasenha_taller}
                  onChange={handleChange}
                />
              </div>
              <button className="btn boton_crear m-4 btn-success" type="submit">
                CREAR
              </button>
            </form>
            {result && <p>{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioTaller;
