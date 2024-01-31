import AprendicesProyectoProductivo from "./componentes/AprendicesProyectoProductivo/AprendicesProyectoProductivo";
import Footer from "./componentes/Footer/Footer";
import FormCreacionAprendiz from "./componentes/FormularioCreacionAprendiz/FormularioCreacionAprendiz";
import FormularioTaller from "./componentes/FormularioCreacionTaller/formularioCreacionTaller";
import Tabla_adjudicados from "./componentes/adjudicados/adjudicados";
import AprendicesSuspendidos from "./componentes/aprendicesSuspendidos/AprendicesSuspendidos";
import FormContactos from "./componentes/contactanos/contactanos";
import AprendicesLectiva from "./componentes/etapaLectiva/aprendicesLectiva";
import FormularioCreaBeneficio from "./componentes/formularioCreacionBeneficio/Formulario_Crea_Bene";
import Inicio from "./componentes/index/index";
import Login from "./componentes/login/Login";
import AprendicesMesGracia from "./componentes/mesGracia/aprendicesMesGracia";
import Navegacion from "./componentes/navIndex/navbar";
import RegistroNovedades from "./componentes/registroNovedadesFormato/registroNovedades";
function App() {
  return (
    <>
      <Navegacion />
      <Inicio />
      <FormContactos />
      <Login />
      <FormularioCreaBeneficio />
      <Tabla_adjudicados />
      <AprendicesMesGracia />
      <AprendicesProyectoProductivo />
      <AprendicesLectiva/>
      <AprendicesSuspendidos />
      <FormCreacionAprendiz />
      <FormularioTaller />
      <RegistroNovedades />
      <Footer />
    </>
  );
}

export default App;
