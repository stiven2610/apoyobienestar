import FormActualizacionDatos from "./FormActApre/FormularioActualizacionDatos";
import FormularioCreacionTaller from "./FormularioCreacionTaller/formularioCreacionTaller";
import Footer from "./componentes/Footer/Footer";
import FormRegistroAsistenciaTaller from "./componentes/FormRegAsiTaller/formularioRegistroAsistencia";
import Tabla_adjudicados from "./componentes/adjudicados/adjudicados";
import Tabla_asistencia from "./componentes/asistenciaTaller/asistenciaTaller";
import FormularioCreaBeneficio from "./componentes/formularioCreacionBeneficio/Formulario_Crea_Bene";
import Index from "./componentes/index";
import Login from "./componentes/login/Login";
import Navegacion from "./componentes/navIndex/navbar";

function App() {
  return (
    <>
      <Navegacion />
      <Index/>
      <Login/>
      <FormularioCreaBeneficio/>
      <Tabla_adjudicados/>
      <Tabla_asistencia/>
      <FormRegistroAsistenciaTaller/>
      <FormActualizacionDatos/>
      <FormularioCreacionTaller/>

      <Footer />
    </>
  );
}

export default App;
