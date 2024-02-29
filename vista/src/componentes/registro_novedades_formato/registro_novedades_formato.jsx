import { useEffect, useState } from "react";
import Boton from "../botones/Boton";
import "./styles.css";

const Registro_novedades_formato = () => {
  const [datos, setDatos] = useState([]);
  const [filtroBusqueda, setFiltroBusqueda] = useState("");
  const [aprendizSeleccionado, setAprendizSeleccionado] = useState(null);
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

  useEffect(() => {
    const aprendizEncontrado = datos.find(
      (item) => String(item.numero_documento_aprendiz) === filtroBusqueda
    );
    setAprendizSeleccionado(aprendizEncontrado);
  }, [filtroBusqueda, datos]);

  const handleBusquedaChange = (e) => {
    setFiltroBusqueda(e.target.value);
  };

  const renderFormulario = () => {
    if (!aprendizSeleccionado) return null;

    switch (aprendizSeleccionado.id_obligacion_mensual) {
      case 1:
        return (
          <form>
            <p className="titulos">Aprendiz realizando taller mensual</p>
            <table className="table table-bordered">
              <thead>
                <tr className='encabezado'>
                  <th>Evaluación del aprendiz</th>
                  <th>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="actividadesCumplidas">
                      <input
                        type="checkbox"
                      />
                      Cumple con las actividades de formación
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="evidenciasPresentadas">
                      <input
                        type="checkbox"
                      />
                      Presenta a tiempo sus evidencias de aprendizaje
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="asistenciaComite">
                      <input
                        type="checkbox"
                      />
                      Asistió a comité académico
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='boton_novedad'>
              <Boton texto="Registrar" color="#41be07"/>
            </div>
          </form>
        );
      case 2:
        return (
          <form>
             <p className="titulos">Aprendiz realizando plan de actividades</p>
            <table className="table table-bordered">
              <thead>
                <tr className='encabezado'>
                  <th>Evaluación del aprendiz</th>
                  <th>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="actividadesCumplidas">
                      <input
                        type="checkbox"
                      />
                      Cumple con las actividades de formación
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="evidenciasPresentadas">
                      <input
                        type="checkbox"
                      />
                      Presenta a tiempo sus evidencias de aprendizaje
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="asistenciaComite">
                      <input
                        type="checkbox"
                      />
                      Asistió a comité académico
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='boton_novedad'>
              <Boton texto="Registrar" color="#41be07"/>
            </div>
          </form>
        );
      case 3:
        return (
          <form>
            <p className="titulos">Aprendiz realizando proyecto productivo</p>
            <table className="table table-bordered">
              <thead>
                <tr className='encabezado'>
                  <th>Evaluación del aprendiz</th>
                  <th>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="actividadesCumplidas">
                      <input
                        type="checkbox"
                      />
                      Cumple con las actividades de formación
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="evidenciasPresentadas">
                      <input
                        type="checkbox"
                      />
                      Presenta a tiempo sus evidencias de aprendizaje
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="asistenciaComite">
                      <input
                        type="checkbox"
                      />
                      Asistió a comité académico
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='boton_novedad'>
              <Boton texto="Registrar" color="#41be07"/>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="padre">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre Completo del Aprendiz</th>
              <th>Tipo de Documento</th>
              <th>Número de Documento</th>
              <th>Estado de Aprendiz</th>
              <th>Obligación Mensual</th>
              <th>Código de Ficha</th>
              <th>Modalidad</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td colSpan="15">Cargando datos...</td>
              </tr>
            ) : (
              aprendizSeleccionado && (
                <tr key={aprendizSeleccionado.numero_documento_aprendiz}>
                  <td>{aprendizSeleccionado.nombre_completo_aprendiz}</td>
                  <td>{aprendizSeleccionado.nombre_documento}</td>
                  <td>{aprendizSeleccionado.numero_documento_aprendiz}</td>
                  <td>{aprendizSeleccionado.nombre_estado_aprendiz}</td>
                  <td>{aprendizSeleccionado.nombre_obligacion_mensual}</td>
                  <td>{aprendizSeleccionado.codigo_ficha}</td>
                  <td>{aprendizSeleccionado.nombre_modalidad}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="container_novedades col-md-8">
          <div className="form-group mb-2 text-center">
            <div className="input-group">
              <input
                   type="text"
                   id="busqueda"
                   className="form-control m-1"
                   value={filtroBusqueda}
                   onChange={handleBusquedaChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Buscar
                </button>
              </div>
            </div>
          </div>
          {renderFormulario()}
        </div>
      </div>
    </>
  );
};

export default Registro_novedades_formato;
