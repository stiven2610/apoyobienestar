import "./styles.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Tabla_adjudicados = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a la API (reemplaza la URL con la URL correcta de tu API)
    fetch("http://localhost:4000/adjudicados")
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
    <div className="container_body">
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>GESTIONAR</th>
                <th>Nombre Completo del Aprendiz</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Obligación Mensual</th>
                <th>Código de Ficha</th>
                <th>Código de Beneficio</th>
                <th>Fecha de Adjudicación</th>
                <th>Modalidad</th>
                <th>Teléfono Fijo</th>
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
                        <Link
                          to={{
                            pathname: "/gestiondatosaprendiz",
                            state: { registro: item }, // Pasar el registro como estado
                          }}
                        >
                          <FontAwesomeIcon icon={faPen} className="mt-3 mb-3" />
                        </Link>
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

export default Tabla_adjudicados;
