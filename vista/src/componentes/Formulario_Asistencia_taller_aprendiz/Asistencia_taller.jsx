const Asistencia_taller = () => {
    return (
        <div className="padre p-4" >
            <div className="container  d-flex justify-content-center ">
                <div className="col-md-5">
                    <div className="container_form bg-light p-4 rounded text-center">
                        <p className="titulo_beneficio text-success font-weight-bold">
                            BENEFICIO
                        </p>
                        <form>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="numeroTaller" className="form_label mb-3">
                                    Numero Taller
                                </label>
                                <input
                                    type="number"
                                    className="form-control form_input"
                                    id="numeroTaller"
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="NumeroDocumento" className="form_label mb-3">
                                    Tipo de Documento
                                </label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Cedula de Ciudadania</option>
                                    <option value="2">Tarjeta de Identida</option>
                                    <option value="3">Cedula de Extranjeria</option>
                                    <option value="4">PEP</option>
                                    <option value="5">Permiso de Proteccion Temporal</option>
                                </select>
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="NumeroDocumento" className="form_label mb-3">
                                    Numero Documento
                                </label>
                                <input
                                    type="number"
                                    className="form-control form_input"
                                    id="NumeroDocumento"
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="ContraseñaTaller" className="form_label mb-3">
                                    Contraseña Taller
                                </label>
                                <input
                                    type="text"
                                    className="form-control form_input"
                                    id="ContraseñaTaller"
                                />
                            </div>
                            <button className="btn boton_crear m-4 btn-success" type="submit">
                                ENVIAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Asistencia_taller;