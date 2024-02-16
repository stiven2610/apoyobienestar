import { Route, Routes } from "react-router-dom";
import FormularioTaller from "../FormularioCreacionTaller/formularioCreacionTaller";
import FormularioActualizacionAprendiz from "../actualizacionAprendiz/ActualizacionAPrendiz";
import TablaAdjudicados from "../adjudicados/adjudicados";
import AprendicesCancelados from "../aprendicesCancelados/AprendicesCancelados";
import FormContactos from "../contactanos/contactanos";
import FormularioCreaBeneficio from "../formularioCreacionBeneficio/Formulario_Crea_Bene";
import Inicio from "../index/index";
import Login from "../login/Login";
import Navegacion from "../navIndex/navbar";
import NovedadComponent from "../novedades/novedades";
import NovedadesForm from "../registroNovedadesFormato/registroNovedades";
import Talleres from "../talleres/Talleres";
import PrivateRoute from "./PrivateRouter";

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
                <FormularioActualizacionAprendiz />
              </PrivateRoute>
            }
          />
          <Route
            path="/talleres"
            element={
              <PrivateRoute>
                <Talleres/>
              </PrivateRoute>
            }

          />
        </Route>
      </Routes>
    </div>
  );
};

export default Approutes;
