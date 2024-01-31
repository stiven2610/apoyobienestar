import AprendicesProyectoProductivo from "./AprendicesProyectoProductivo/AprendicesProyectoProductivo";
import Footer from "./componentes/Footer/Footer";
import FormCreacionAprendiz from "./componentes/FormularioCreacionAprendiz/FormularioCreacionAprendiz";
import FormularioActualizacionAprendiz from "./componentes/actualizacionAprendiz/ActualizacionAPrendiz";
import AprendicesCancelados from "./componentes/aprendicesCancelados/AprendicesCancelados";
import AprendicesSuspendidos from "./componentes/aprendicesSuspendidos/AprendicesSuspendidos";
import AprendicesLectiva from "./componentes/etapaLectiva/aprendicesLectiva";
import AprendicesMesGracia from "./componentes/mesGracia/aprendicesMesGracia";
import Navegacion from "./componentes/navIndex/navbar";
import FormContactos from "./contactanos/contactanos";

function App() {
  return (
    <>
      <Navegacion />
      <FormCreacionAprendiz/>
      <AprendicesLectiva/>
      <AprendicesMesGracia/>
      <AprendicesSuspendidos/>
      <AprendicesCancelados/>
      <AprendicesProyectoProductivo/>
      <FormContactos/>
      <FormularioActualizacionAprendiz/>
      <Footer />
    </>
  );
}

export default App;
