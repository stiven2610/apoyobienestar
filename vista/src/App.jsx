import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./componentes/index/index";
import FormContactos from "./componentes/contactanos/contactanos";
import Login from "./componentes/login/Login";
import Navadministrador from './Navadministrador/navAdministrador';
import Footer from "./componentes/Footer/Footer";
import FormRegistroAsistenciaTaller from "./componentes/FormRegAsiTaller/formularioRegistroAsistencia";
import FormCreacionAprendiz from "./componentes/FormularioCreacionAprendiz/FormularioCreacionAprendiz";
import FormularioTaller from "./componentes/FormularioCreacionTaller/formularioCreacionTaller";
import Tabla_adjudicados from "./componentes/adjudicados/adjudicados";
import AprendicesCancelados from "./componentes/aprendicesCancelados/AprendicesCancelados";
import AprendicesAplazados from "./componentes/aprendicesSuspendidos/AprendicesAplazados";
import Tabla_asistencia from "./componentes/asistenciaTaller/asistenciaTaller";
import FormularioCreaBeneficio from "./componentes/formularioCreacionBeneficio/Formulario_Crea_Bene";
import AprendicesLectiva from "./componentes/etapaLectiva/aprendicesLectiva";
import AprendicesMesGracia from "./componentes/mesGracia/aprendicesMesGracia";
import NovedadComponent from "./componentes/novedades/novedades";
import RegistroNovedades from "./componentes/registroNovedadesFormato/registroNovedades";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Esta función se llamará después de un inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {!loggedIn && (
          <>
            <Inicio />
            <Routes>
              <Route path="/contacto" element={<FormContactos />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </>
        )}

        {loggedIn && (
          <Routes>
            <Route path="/navadmin" element={<Navadministrador />} />
            <Route path="/asistencia" element={<FormRegistroAsistenciaTaller />} />
            <Route path="/asistenciataller" element={<Tabla_asistencia />} />
            <Route path="/beneficio" element={<FormularioCreaBeneficio />} />
            <Route path="/adjudicados" element={<Tabla_adjudicados />} />
            <Route path="/mesgracia" element={<AprendicesMesGracia />} />
            <Route path="/lectiva" element={<AprendicesLectiva />} />
            <Route path="/aplazados" element={<AprendicesAplazados />} />
            <Route path="/cancelados" element={<AprendicesCancelados />} />
            <Route path="/creacionaprendiz" element={<FormCreacionAprendiz />} />
            <Route path="/creaciontaller" element={<FormularioTaller />} />
            <Route path="/novedades" element={<RegistroNovedades />} />
            <Route path="/novedadcomponent" element={<NovedadComponent />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
