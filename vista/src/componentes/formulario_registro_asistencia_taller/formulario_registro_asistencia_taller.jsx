// Formulario_registro_asistencia_taller.js
import  { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Formulario_registro_asistencia_taller = () => {
  const location = useLocation();
  const nombreTaller = location.state?.nombre_taller;
  const { codigo_taller } = useParams();
  const [numero_documento_aprendiz, setNumero_documento_aprendiz] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!numero_documento_aprendiz) {
      setError("Por favor, complete el campo del número de documento del aprendiz.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/asistenciataller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo_taller,
          numero_documento_aprendiz,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      setNumero_documento_aprendiz("");
      setError("");
      alert("Asistencia registrada correctamente para el aprendiz...");
    } catch (error) {
      setError(error.message || "Hubo un problema al procesar la solicitud.");
    }
  };

  return (
    <div>
      <h2>Registro de Asistencia para {nombreTaller}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de documento del aprendiz:
          <input
            type="text"
            value={numero_documento_aprendiz}
            onChange={(e) => setNumero_documento_aprendiz(e.target.value)}
            required
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrar Asistencia</button>
      </form>
    </div>
  );
};

export default Formulario_registro_asistencia_taller;
