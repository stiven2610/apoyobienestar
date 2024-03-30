import { useEffect, useState } from "react";
import "./styles.css";
const Aprendices_cancelados = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/cancelados")
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
    <>
    <div className="container-cancelados">
      <div className="table-container">
      <h4 className="titulos">Aprendices cancelados</h4>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Nombre Completo del Aprendiz</th>
                <th>Código de Ficha</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Número de Resolución</th>
                <th>Fecha de Cancelación</th>
                <th>Motivo de Cancelación</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan="21">Cargando datos...</td>
                </tr>
              ) : (
                datos.map((item) => (
                  <tr key={item.numero_documento_aprendiz}>
        
                    <td>{item.nombre_completo_aprendiz}</td>
                    <td>{item.codigo_ficha}</td>
                    <td>{item.nombre_documento}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                    <td>{item.numero_resolucion}</td>
                    <td>{item.fecha_cancelacion}</td>
                    <td>{item.motivo_cancelacion}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>

  );
};

export default Aprendices_cancelados;
