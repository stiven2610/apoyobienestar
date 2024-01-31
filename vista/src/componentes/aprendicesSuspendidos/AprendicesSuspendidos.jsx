import { useEffect, useState } from "react";
import "./styles.css";

const AprendicesSuspendidos = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/dda")
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
    <div className="container_body">
      <h4>Aprendices Suspendidos</h4>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ACTUALIZAR</th>
                <th>Nombre Completo del Aprendiz</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Motivo de suspensión</th>
                <th>fecha de inicio de suspensión</th>
                <th>fecha fin de suspensión</th>
                <th>Teléfono Móvil</th>
                <th>Correo Electrónico del Aprendiz</th>
                <th>Nombre instructor lider</th>
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
                    <td>
                      <div className="iconos_gestion h-100 d-flex flex-column align-items-center ">
                        {/* Enlace a="/gestiondatosaprendiz" y estado con el registro */}
                      </div>
                    </td>
                    <td>{item.nombre_completo_aprendiz}</td>
                    <td>{item.tipo_documento}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                    <td>{item.obligacion_mensual}</td>
                    <td>{item.codigo_ficha}</td>
                    <td>{item.codigo_beneficio}</td>
                    <td>{item.fecha_adjudicacion}</td>
                    <td>{item.id_modalidad}</td>
                    <td>{item.numero_telefono_fijo}</td>
                    <td>{item.numero_telefono_movil}</td>
                    <td>{item.direccion_residencia_aprendiz}</td>
                    <td>{item.email_aprendiz}</td>
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

export default AprendicesSuspendidos;
