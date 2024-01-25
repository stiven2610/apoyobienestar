import "./styles.css"
const Buscador_asis_taller = () =>{
    return ( 
        <div className="container mt-5">
        <form>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="numero">Número Taller:</label>
                        <input type="number" className="form-control" id="numero" placeholder="Ingrese el Numero del Taller"/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="texto">Tema Taller</label>
                        <input type="text" className="form-control" id="TemaTaller" placeholder="Ingrese el Tema del Taller"/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="texto">Numero Documento Aprendiz</label>
                        <input type="Number" className="form-control" id="numeroDocumento" placeholder="Ingrese el Numero de Documento"/>
                    </div>
                </div>
            <button type="submit" className="btn btn-primary mt-4">Buscar</button>

            </div>
        </form>
    </div>
    );
};
export default Buscador_asis_taller;