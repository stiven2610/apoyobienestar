import { useEffect, useState } from "react";
import Navadministrador from "../Navadministrador/navAdministrador";
import Boton from "../botones/Boton";
import "./styles.css";
const TablaAdjudicados = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroBusqueda, setFiltroBusqueda] = useState("");

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

  const handleEstadoChange = (e) => {
    setFiltroEstado(e.target.value);
  };

  const handleBusquedaChange = (e) => {
    setFiltroBusqueda(e.target.value);
  };

  const agregarNuevoAprendiz = () => {
    // Implementa la lógica para agregar un nuevo aprendiz
    console.log("Agregando nuevo aprendiz");
  };

  const filteredDatos = datos.filter((item) => {
    const estadoMatch =
      filtroEstado === "" || String(item.id_estado_aprendiz) === filtroEstado;
    const busquedaMatch =
      item.nombre_completo_aprendiz
        .toLowerCase()
        .includes(filtroBusqueda.toLowerCase()) ||
      String(item.numero_documento_aprendiz).includes(String(filtroBusqueda));
    return estadoMatch && busquedaMatch;
  });

  return (
    <>
      <Navadministrador />
      <div className="container ">
        <h4 className="mb-4">Gestión de Aprendices adjudicados</h4>
        <div className="container-filtros">
          <div className="container-filtro col-md-4 mb-3">
            <label htmlFor="estado" className="titulos">
              Filtrar por Estado de Aprendiz:
            </label>
            <select
              id="estado"
              className="select form-control"
              value={filtroEstado}
              onChange={handleEstadoChange}
            >
              <option value="">Todos</option>
              <option value="1">
                Aprendices a punto de cumplir etapa lectiva
              </option>
              <option value="2">Aprendices en mes de gracia</option>
              <option value="3">Aprendices en proyecto productivo</option>
              <option value="4">Aprendices Aplazados</option>
              <option value="5">Aprendices en etapa lectiva</option>
            </select>
          </div>

          <div className="container-buscador col-md-4 mb-3">
            <label htmlFor="busqueda" className="titulostext-dark">
              Buscar por Nombre o Número de Documento:
            </label>
            <input
              type="text"
              id="busqueda"
              className="form-control"
              value={filtroBusqueda}
              onChange={handleBusquedaChange}
            />
          </div>

          <div className="container-boton col-md-4 mb-3">
          <Boton  texto="Adjudicar nuevo aprendiz"  color="#39A900" textcolor="#ffffff"/>
          </div>
        </div>

        <div className="table-responsive">
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
                      <div className="iconos_gestion d-flex flex-column align-items-center ">
                        
                        <Boton texto="Editar" color="#A2F5EC"/>

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
        </div>
      </div>
    </>
  );
};

export default TablaAdjudicados;
