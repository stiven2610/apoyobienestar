// Tabla_asistencia.js
import { useEffect, useState } from "react";
import { useNavigate,useLocation,useParams } from "react-router-dom";
import "./styles.css";
import Boton from "../botones/Boton";

const Asistencia_taller = () => {
  const location = useLocation();
  const nombreTaller = location.state?.nombre_taller;
  const { codigo_taller } = useParams();
  const navigate = useNavigate();
  const [data, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    // Realiza una solicitud GET a la API (reemplaza la URL con la URL correcta de tu API)
    fetch(`http://localhost:4000/asistencias/${codigo_taller}`)
      .then((response) => response.json())
      .then((data) => {
        // Verifica si 'data' contiene la propiedad 'data' que contiene el array de datos
        if (data.data && Array.isArray(data.data)) {
          setDatos(data.data); // Almacena los datos en el estado
          setCargando(false); // Marca la carga como completa
        } else {
          console.error("Los datos recibidos no son válidos.");
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setCargando(false); // Marca la carga como completa incluso en caso de error
      });
  }, []);
  const handleCLick = (codigo_taller, nombre_taller) => {
   

    navigate(`/registroasistencia/${codigo_taller}`, { state: { nombre_taller } });
  };

  return (
    <div className="container_body v-100">
      <div className="table-container">
        <div onClick={() => handleCLick(codigo_taller)}>
          <Boton texto="registrar asistencia" textcolor="f8f8f8" />{" "}
        </div>
        <p>{nombreTaller}</p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Nombre de taller</th>
                <th>Número de documento</th>
                <th>Nombre completo del aprendiz</th>
                <th>Codigo de ficha</th>
                <th>Fecha asistencia</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan="5">Cargando Datos...</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.codigo_taller}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Asistencia_taller;
