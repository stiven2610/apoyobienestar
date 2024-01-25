import { Link } from "react-router-dom";
import "./styles.css";

const Boton_cargue_exc = () => {
  return (
    <div className="container  ">
      <div className="mb-10">
      <h1 >CARGAR DOCUMENTO DE APRENDICES ADJUDICADOS</h1>

      </div>
      <div className="bg-light p-3 rounded d-flex justify-content-center align-items-center">
        <form>
          <h1 className="text-center">Cargar Documento</h1>
          <div className="mb-3">
            <label htmlFor="archivo" className="form-label">
              Selecciona un archivo:
            </label>
            <input
              type="file"
              className="form-control"
              id="archivo"
              name="archivo"
              accept=".xlsx, .xls,.doc,.docs"
              onChange=""
            />
            <Link to='/adjudicados'>
            <button type="submit" className="btn mt-3 btn-primary">
              ENVIAR
            </button>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};
export default Boton_cargue_exc;
