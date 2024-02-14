import { useState } from "react";
import Boton from "../botones/Boton";
import "./styles.css";
const FormularioTaller = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    codigo_taller: "",
    nombre_taller: "",
    fecha_taller: "",
    contrasenha_taller: "",
  });

  // Estado para manejar los errores
  const [errors, setErrors] = useState({
    codigo_taller: "",
  });

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
    <>
      <div className="container_form_taller">
        <form className="formulario_taller" onSubmit={handleSubmit}>
          <p className="titulos">TALLER</p>
          <label htmlFor="nombre_taller" className="subtitulos">
            Nombre
          </label>
          <input
            type="text"
            className="form-control form_input"
            id="nombre_taller"
            name="nombre_taller"
            value={formData.nombre_taller}
            onChange={handleChange}
          />
          <label htmlFor="fecha_taller" className="subtitulos">
            Fecha
          </label>
          <input
            type="date"
            className="form-control form_input"
            id="fecha_taller"
            name="fecha_taller"
            value={formData.fecha_taller}
            onChange={handleChange}
          />
          <label htmlFor="contrasenha_taller" className="subtitulos">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control form_input mb-4"
            id="contrasenha_taller"
            name="contrasenha_taller"
            value={formData.contrasenha_taller}
            onChange={handleChange}
          />
          <Boton className="boton_taller" texto="crear" tamaño="30%" textcolor="#fefefe" color="#50bb1b" />
        {result && <p>{result}</p>}

        </form>
      </div>
    </>
  );
};

export default FormularioTaller;
