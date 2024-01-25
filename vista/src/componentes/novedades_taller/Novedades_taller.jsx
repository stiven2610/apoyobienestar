import "./styles.css"
const Novedades_taller = () => {
    return (
        <><div className="contenedor_check p-4 ">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" for="flexSwitchCheckDefault">El aprendiz cumple con las actividades correspondientes de su formación</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" for="flexSwitchCheckChecked">El aprendiz presenta a tiempo sus evidencias de su aprendizaje</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
                <label className="form-check-label" for="flexSwitchCheckDisabled">El aprendiz ha asistido a comité académico</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" />
                <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">El aprendiz ha tenido llamados de atención

                </label>
            </div>
            

            </div>
            <button type="button" className="btn btn-success m-2">Registrar</button>
        </>
    );
};

export default Novedades_taller;
