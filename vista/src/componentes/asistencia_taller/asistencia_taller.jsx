import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FormularioRegistroAsistenciaTaller from "../formulario_registro_asistencia_taller/formulario_registro_asistencia_taller";
import "./styles.css";
import BackIcon from "../backIcon/BackIcon";

const Asistencia_taller = () => {
  const location = useLocation();
  const nombreTaller = location.state?.nombre_taller;
  const { codigo_taller } = useParams();
  const [data, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:4000/asistencias/${codigo_taller}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setDatos(data.data);
          setCargando(false);
        } else {
          console.error("Los datos recibidos no son válidos.");
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setCargando(false);
      });
  }, []);

  return (
    <div className="asistencia_taller">
      <p className="titulos text-center mt-3">{nombreTaller}</p>
      <BackIcon/>

      <div className="table_container_asistencia">
        <div>
          <FormularioRegistroAsistenciaTaller
            nombreTaller={nombreTaller}
            codigo_taller={codigo_taller}
          />
        </div>
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
                    <td>{nombreTaller}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                    <td>{item.nombre_completo_aprendiz}</td>
                    <td>{item.codigo_ficha}</td>
                    <td>{item.fecha_insert}</td>
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
