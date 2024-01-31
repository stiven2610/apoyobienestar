import React, { useState } from 'react';

const NovedadesForm = () => {
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [nombreAprendiz, setNombreAprendiz] = useState('');
  const [actividadesCumplidas, setActividadesCumplidas] = useState(false);
  const [evidenciasPresentadas, setEvidenciasPresentadas] = useState(false);
  const [asistenciaComite, setAsistenciaComite] = useState(false);
  const [observacionesActividades, setObservacionesActividades] = useState('');
  const [observacionesEvidencias, setObservacionesEvidencias] = useState('');
  const [observacionesAsistencia, setObservacionesAsistencia] = useState('');

  const handleSearch = async () => {
    try {
      const nombreEncontrado = await buscarNombrePorDocumento(numeroDocumento);
      setNombreAprendiz(nombreEncontrado);
    } catch (error) {
      console.error('Error al buscar el aprendiz:', error);
      // Puedes mostrar un mensaje de error al usuario según tus necesidades.
    }
  };

  const buscarNombrePorDocumento = async (documento) => {
    return new Promise((resolve, reject) => {
      // Simulamos una llamada asíncrona con un temporizador.
      setTimeout(() => {
        const nombresMock = {
          '123456789': 'Juan Pérez',
          '987654321': 'María González',
          // Agrega más documentos y nombres según tus necesidades.
        };
        const nombreEncontrado = nombresMock[documento];
        if (nombreEncontrado) {
          resolve(nombreEncontrado);
        } else {
          reject('No se encontró el aprendiz con ese número de documento.');
        }
      }, 1000); // Simulamos un retardo de 1 segundo.
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend o realizar acciones necesarias.
    // Aquí puedes enviar los datos del formulario al servidor.
    // Luego, puedes restablecer los estados para limpiar el formulario.
    setNumeroDocumento('');
    setNombreAprendiz('');
    setActividadesCumplidas(false);
    setEvidenciasPresentadas(false);
    setAsistenciaComite(false);
    setObservacionesActividades('');
    setObservacionesEvidencias('');
    setObservacionesAsistencia('');
  };

  return (
    <div className="padre p-4">
      <div className="container d-flex justify-content-center">
        <div className="col-md-8">
          <div className="container_form bg-light p-4 rounded text-center">
            <p className="titulo_beneficio text-success font-weight-bold">
              REGISTRAR NOVEDADES DE APRENDIZ EN TALLER MENSUAL
            </p>
            <div className="form-group mb-2 text-center">
              <label htmlFor="numeroDocumento" className="form_label mb-3">
                Número de Documento del Aprendiz
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="numeroDocumento"
                  name="numeroDocumento"
                  value={numeroDocumento}
                  onChange={(e) => setNumeroDocumento(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                    Buscar
                  </button>
                </div>
              </div>
            </div>
            {nombreAprendiz && (
              <div className="mb-3">
                <p className="font-weight-bold">Aprendiz: {nombreAprendiz}</p>
              </div>
            )}
            <form onSubmit={handleFormSubmit}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Novedad</th>
                    <th>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="actividadesCumplidas">
                        <input
                          type="checkbox"
                          checked={actividadesCumplidas}
                          onChange={() => setActividadesCumplidas(!actividadesCumplidas)}
                        />
                        Cumple con las actividades de formación
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={observacionesActividades}
                        onChange={(e) => setObservacionesActividades(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="evidenciasPresentadas">
                        <input
                          type="checkbox"
                          checked={evidenciasPresentadas}
                          onChange={() => setEvidenciasPresentadas(!evidenciasPresentadas)}
                        />
                        Presenta a tiempo sus evidencias de aprendizaje
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={observacionesEvidencias}
                        onChange={(e) => setObservacionesEvidencias(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="asistenciaComite">
                        <input
                          type="checkbox"
                          checked={asistenciaComite}
                          onChange={() => setAsistenciaComite(!asistenciaComite)}
                        />
                        Asistió a comité académico
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={observacionesAsistencia}
                        onChange={(e) => setObservacionesAsistencia(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn boton_crear m-4 btn-success" type="submit">
                REGISTRAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovedadesForm;
