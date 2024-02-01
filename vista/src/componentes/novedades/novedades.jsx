import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NovedadComponent = ({ novedades, eliminarNovedad }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark"> {/* Cambié la clase a thead-dark */}
          <tr>
            <th>Número de Documento</th>
            <th>Fecha de Novedad</th>
            <th>Nombre del Aprendiz</th>
            <th>Novedad</th>
            <th>Motivo de la Novedad</th>
            <th>Estado del Aprendiz</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {novedades && novedades.length > 0 ? (
            novedades.map((aprendiz, index) => (
              <tr key={index}>
                <td>{aprendiz.numeroDocumento}</td>
                <td>{aprendiz.fecha}</td>
                <td>{aprendiz.nombre}</td>
                <td>{aprendiz.novedad}</td>
                <td>{aprendiz.motivo}</td>
                <td>{aprendiz.estado}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarNovedad(index)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hay novedades para mostrar.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NovedadComponent;
