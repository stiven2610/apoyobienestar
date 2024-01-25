import Buscador_sencillo from "../Buscador/Buscador_sencillo";
import Header from "../Header/Header"
import Tabla_asistencia from "../Tabla_asistencia.jsx/Tabla_asistencia";

const Asistencia_taller_adm =()=>{
    return(
        <>
        <Header/>
        <Buscador_sencillo/>
        <Tabla_asistencia/>
        </>
    );
};
export default Asistencia_taller_adm;