import Buscador_sencillo from "../Buscador/Buscador_sencillo";
import Header from "../Header/Header";

const Tabla_culminacion = () => {
    return (
      <>
      <Header/>
      <Buscador_sencillo/>
      <div className="table-container m-4 h-100vh">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Nombre Completo del Aprendiz</th>
                <th>Codigo Ficha</th>
                <th>Número de Documento</th>
                <th>Fecha Culminacion Ficha</th>
              </tr>
            </thead>
          
          </table>
        </div>
      </div>
      </>
    );
  };
  export default Tabla_culminacion;
  