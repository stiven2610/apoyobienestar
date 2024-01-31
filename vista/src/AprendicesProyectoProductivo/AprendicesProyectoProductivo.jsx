import { useEffect, useState } from "react";
import "./styles.css";

const AprendicesProyectoProductivo = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/adjudicados")
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
      <h4>Aprendices realizando proyecto Productivo</h4>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>GESTIONAR</th>
                <th>Nombre Completo del Aprendiz</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Código de Ficha</th>
                <th>Código de Beneficio</th>
                <th>Fecha de Adjudicación</th>
                <th>Modalidad</th>
                <th>Teléfono Móvil</th>
                <th>Dirección de Residencia del Aprendiz</th>
                <th>Correo Electrónico del Aprendiz</th>
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

export default AprendicesProyectoProductivo;
