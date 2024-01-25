import Header from "../Header/Header";
import Buscador_aprendiz from "../Buscador/Buscador_aprendiz";
import Tabla_formato_seguimiento from "../Tabla_formato_seguimiento/Tabla_formato_seguimiento";
import Novedades_taller from "../novedades_taller/Novedades_taller";
import "./styles.css";
const Cargue_formato_seguimiento = () => {
  return (
    <>
      <Header />
      <div className="contenedor_componentes">
        <div className="contenedor_buscador">
          <Buscador_aprendiz />
        </div>
        <div className="contenedor_hijo">
          <Tabla_formato_seguimiento />
          <Novedades_taller/>
        </div>
      </div>
    </>
  );
};
export default Cargue_formato_seguimiento;
