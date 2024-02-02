import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AprendicesProyectoProductivo from "./componentes/AprendicesProyectoProductivo/AprendicesProyectoProductivo";
import Footer from "./componentes/Footer/Footer";
import FormRegistroAsistenciaTaller from "./componentes/FormRegAsiTaller/formularioRegistroAsistencia";
import FormCreacionAprendiz from "./componentes/FormularioCreacionAprendiz/FormularioCreacionAprendiz";
import FormularioTaller from "./componentes/FormularioCreacionTaller/formularioCreacionTaller";
import Tabla_adjudicados from "./componentes/adjudicados/adjudicados";
import AprendicesCancelados from "./componentes/aprendicesCancelados/AprendicesCancelados";
import AprendicesAplazados from "./componentes/aprendicesSuspendidos/AprendicesAplazados";
import Tabla_asistencia from "./componentes/asistenciaTaller/asistenciaTaller";
import FormContactos from "./componentes/contactanos/contactanos";
import AprendicesLectiva from "./componentes/etapaLectiva/aprendicesLectiva";
import FormularioCreaBeneficio from "./componentes/formularioCreacionBeneficio/Formulario_Crea_Bene";
import Inicio from "./componentes/index/index";
import Login from "./componentes/login/Login";
import AprendicesMesGracia from "./componentes/mesGracia/aprendicesMesGracia";
import NovedadComponent from "./componentes/novedades/novedades";
import RegistroNovedades from "./componentes/registroNovedadesFormato/registroNovedades";
import Navadministrador from './Navadministrador/navAdministrador';
function App() {
  return (
    <Router>
      <div>
        <Inicio/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<FormContactos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navadmin" element={<Navadministrador />} />
          <Route path="/asistencia" element={<FormRegistroAsistenciaTaller />} />

          <Route path="/asistenciataller" element={<Tabla_asistencia />} />
          <Route path="/beneficio" element={<FormularioCreaBeneficio />} />
          <Route path="/adjudicados" element={<Tabla_adjudicados />} />
          <Route path="/mesgracia" element={<AprendicesMesGracia />} />
          <Route path="/proyectoproductivo" element={<AprendicesProyectoProductivo />} />
          <Route path="/lectiva" element={<AprendicesLectiva />} />
          <Route path="/aplazados" element={<AprendicesAplazados />} />
          <Route path="/cancelados" element={<AprendicesCancelados />} />
          <Route path="/creacionaprendiz" element={<FormCreacionAprendiz />} />
          <Route path="/creaciontaller" element={<FormularioTaller />} />
          <Route path="/novedades" element={<RegistroNovedades />} />
          <Route path="/novedadcomponent" element={<NovedadComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
