import "./styles.css"
const Buscador_sencillo = () => {
  return (
    <div className="container mt-3 col-md-6 ">
      <form>
        <div className=" container_flex p-3 ">
          <div className="form-group p-2">
            <label htmlFor="NumeroDocumento" className="form_label ">
              Tipo de Documento
            </label>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Cedula de Ciudadania</option>
              <option value="2">Tarjeta de Identidad</option>
              <option value="3">Cedula de Extranjeria</option>
              <option value="4">PEP</option>
              <option value="5">Permiso de Proteccion Temporal</option>
            </select>
          </div>
          <div className="col p-3">
            <div className="form-group">
              <label>Numero Documento Aprendiz</label>
              <input
                type="Number"
                className="form-control"
                id="numeroDocumento"
                placeholder="Ingrese el Numero de Documento"
              />
            </div>
         
          </div>
          <div>
          <button type="submit" className="btn btn-primary mt-4 ">
            Buscar
          </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};
export default Buscador_sencillo;
