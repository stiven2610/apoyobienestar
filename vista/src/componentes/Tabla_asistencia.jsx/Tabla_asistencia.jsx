import { useEffect, useState } from "react";
import "./styles.css";

const Tabla_asistencia = () => {
  const [data, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a la API (reemplaza la URL con la URL correcta de tu API)
    fetch("http://localhost:4000/asistencias")
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

  return (
    <div className="container_body v-100">
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Código Taller</th>
                <th>Número de Documento</th>
                <th>Fecha Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan="3">Cargando datos...</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.codigo_taller}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                    <td>{item.fecha_asistencia}</td>
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

export default Tabla_asistencia;
