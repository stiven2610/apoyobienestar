import Boton from "../botones/Boton";
import "./styles.css";

const Registro_novedades_formato = () => {
  return (
    <>
    <div className="padre">
        <div className="container_novedades col-md-8">
            <div className="form-group mb-2 text-center">
            
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="numeroDocumento"
                  name="numeroDocumento"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
            <form>
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
              <Boton texto="Registrar" color="#41be07" />

              </div>
            </form>
          </div>
        </div>
    </>

  );
};

export default Registro_novedades_formato;
