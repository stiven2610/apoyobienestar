import { useState } from "react";
import { useNavigate } from "react-router";
import Boton from "../botones/Boton";
import "./styles.css";
const FormularioTaller = () => {
  const navigate = useNavigate();

  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    nombre_taller: "",
    fecha_taller: "",
    contrasenha_taller: "",
  });
  const [errors, setErrors] = useState({
    codigo_taller: "",
  });
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
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
        alert("Taller creado exitosamente");
        navigate('/talleres');
      } else {
        setResult("Error en la solicitud");
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
            required
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
            required
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
            required
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
