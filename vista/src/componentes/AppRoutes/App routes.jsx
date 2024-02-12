import { Route, Routes } from "react-router-dom";
import Navegacion from "../navIndex/navbar";
import Inicio from "../index/index";
import Login from "../login/Login";
import FormContactos from "../contactanos/contactanos";
import TablaAdjudicados from "../adjudicados/adjudicados";
import PrivateRoute from "./PrivateRouter";
import AprendicesCancelados from "../aprendicesCancelados/AprendicesCancelados";
import NovedadComponent from "../novedades/novedades";
import FormularioTaller from "../FormularioCreacionTaller/formularioCreacionTaller";
import FormularioCreaBeneficio from "../formularioCreacionBeneficio/Formulario_Crea_Bene";
import NovedadesForm from "../registroNovedadesFormato/registroNovedades";
import FormularioActualizacionAprendiz from "../actualizacionAprendiz/ActualizacionAPrendiz";

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navegacion />}>
          <Route index element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="contacto" element={<FormContactos />} />
          <Route
            path="/adjudicados"
            element={
              <PrivateRoute>
                <TablaAdjudicados />
              </PrivateRoute>
            }
          />
          <Route
            path="/cancelados"
            element={
              <PrivateRoute>
                <AprendicesCancelados />
              </PrivateRoute>
            }
          />
          <Route
            path="/novedades"
            element={
              <PrivateRoute>
                <NovedadComponent />
              </PrivateRoute>
            }
          />
          <Route
            path="/creaciondetaller"
            element={
              <PrivateRoute>
                <FormularioTaller />
              </PrivateRoute>
            }
          />
          <Route
            path="/creacionbeneficio"
            element={
              <PrivateRoute>
                <FormularioCreaBeneficio />
              </PrivateRoute>
            }
          />
          <Route
            path="/registronovedad"
            element={
              <PrivateRoute>
                <NovedadesForm />
              </PrivateRoute>
            }
          />
           <Route
            path="/actualizaraprendiz/:id"
            element={
              <PrivateRoute>
                <FormularioActualizacionAprendiz/>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Approutes;
