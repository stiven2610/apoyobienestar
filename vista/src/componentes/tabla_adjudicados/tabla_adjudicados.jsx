import { useEffect, useRef, useState } from "react";
import Boton from "../botones/Boton";
import Update_aprendiz from "../update_aprendiz/update_aprendiz";
import "./styles.css";

const Tabla_adjudicados = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroBusqueda, setFiltroBusqueda] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [aprendizSeleccionado, setAprendizSeleccionado] = useState(null);

  const formularioRef = useRef(null);

  useEffect(() => {
    fetch("http://10.200.138.62.62:4000/adjudicados")
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

  useEffect(() => {
    if (mostrarFormulario && formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mostrarFormulario]);

  const handleBusquedaChange = (e) => {
    setFiltroBusqueda(e.target.value);
  };

  const handleEditarClick = (aprendiz) => {
    setAprendizSeleccionado(aprendiz);
    setMostrarFormulario(true);
  };

  const handleCloseForm = () => {
    setMostrarFormulario(false);
    setAprendizSeleccionado(null);
  };

  const filteredDatos = datos.filter((item) => {
    return (
      item.nombre_completo_aprendiz
        .toLowerCase()
        .includes(filtroBusqueda.toLowerCase()) ||
      String(item.numero_documento_aprendiz).includes(String(filtroBusqueda))
    );
  });

  return (
    <>
      <div className="container_adjudicados">
        <div className="container_filtros">
          <label htmlFor="busqueda" className="subtitulos">
            Buscar Aprendiz:
          </label>
          <input
            type="text"
            id="busqueda"
            className="form-control m-1"
            value={filtroBusqueda}
            onChange={handleBusquedaChange}
          />

          <Boton
            texto="Agregar"
            tamaño="20%"
            color="#39A900"
            textcolor="#ffffff"
          />
        </div>
        <div className="adjudicados">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>GESTIONAR</th>
                <th>Número Consecutivo</th>
                <th>Nombre Completo del Aprendiz</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Estado de Aprendiz</th>
                <th>Obligación Mensual</th>
                <th>Código de Ficha</th>
                <th>Nombre Beneficio</th>
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
                  <td colSpan="15">Cargando datos...</td>
                </tr>
              ) : (
                filteredDatos.map((item) => (
                  <tr key={item.numero_documento_aprendiz}>
                    <td>
                      <div
                        className="iconos_gestion d-flex flex-column align-items-center "
                        onClick={() => handleEditarClick(item)}
                      >
                        <Boton texto="Editar" color="#A2F5EC" />
                      </div>
                    </td>
                    <td>{item.numero_consecutivo}</td>
                    <td>{item.nombre_completo_aprendiz}</td>
                    <td>{item.nombre_documento}</td>
                    <td>{item.numero_documento_aprendiz}</td>
                    <td>{item.nombre_estado_aprendiz}</td>
                    <td>{item.nombre_obligacion_mensual}</td>
                    <td>{item.codigo_ficha}</td>
                    <td>{item.nombre_beneficio}</td>
                    <td>{item.fecha_adjudicacion}</td>
                    <td>{item.nombre_modalidad}</td>
                    <td>{item.numero_telefono_fijo}</td>
                    <td>{item.numero_telefono_movil}</td>
                    <td>{item.direccion_residencia_aprendiz}</td>
                    <td>{item.email_aprendiz}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {mostrarFormulario && aprendizSeleccionado && (
            <div ref={formularioRef} className="container_">
              <Update_aprendiz aprendiz={aprendizSeleccionado} />
              <div onClick={handleCloseForm}>
                <Boton texto="Cancelar" textcolor="#fffff" color="#fa4711" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabla_adjudicados;
