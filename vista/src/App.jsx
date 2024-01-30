import Footer from "./componentes/Footer/Footer";
import FormCreacionAprendiz from "./componentes/FormularioCreacionAprendiz/FormularioCreacionAprendiz";
import AprendicesCancelados from "./componentes/aprendicesCancelados/AprendicesCancelados";
import AprendicesSuspendidos from "./componentes/aprendicesSuspendidos/AprendicesSuspendidos";
import AprendicesLectiva from "./componentes/etapaLectiva/aprendicesLectiva";
import AprendicesMesGracia from "./componentes/mesGracia/aprendicesMesGracia";
import Navegacion from "./componentes/navIndex/navbar";

function App() {
  return (
    <>
      <Navegacion />
      <FormCreacionAprendiz/>
      <AprendicesLectiva/>
      <AprendicesMesGracia/>
      <AprendicesSuspendidos/>
      <AprendicesCancelados/>
      <Footer />
    </>
  );
}

export default App;
