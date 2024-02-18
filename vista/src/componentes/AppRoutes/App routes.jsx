import { Route, Routes } from "react-router-dom";
import Inicio from "../index/index";
import Login from "../login/Login";
import Talleres from "../talleres/Talleres";
import PrivateRoute from "./PrivateRouter";
import Update_aprendiz from "../update_aprendiz/update_aprendiz";
import Tabla_adjudicados from "../tabla_adjudicados/tabla_adjudicados";
import Asistencia_taller from "../asistencia_taller/asistencia_taller";
import Formulario_contacto from "../formulario_contacto/formulario_contacto";
import Formulario_registro_asistencia_taller from "../formulario_registro_asistencia_taller/formulario_registro_asistencia_taller";
import Nav_index from "../nav_index/nav_index";
import Aprendices_cancelados from "../aprendicesCancelados/aprendices_cancelados";
import Novedades_presentadas from "../novedades_presentadas/novedades_presentadas";
import Formulario_create_taller from "../formulario_create_taller/formulario_create_taller";
import Formulario_create_beneficio from "../formulario_create_beneficio/formulario_create_beneficio";
import Registro_novedades_formato from "../registro_novedades_formato/registro_novedades_formato";

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav_index />}>
          <Route index element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="contacto" element={<Formulario_contacto />} />
          <Route
            path="/adjudicados"
            element={
              <PrivateRoute>
                <Tabla_adjudicados/>
              </PrivateRoute>
            }
          />
          <Route
            path="/cancelados"
            element={
              <PrivateRoute>
                <Aprendices_cancelados/>
              </PrivateRoute>
            }
          />
          <Route
            path="/novedades"
            element={
              <PrivateRoute>
                <Novedades_presentadas/>
              </PrivateRoute>
            }
          />
          <Route
            path="/creaciondetaller"
            element={
              <PrivateRoute>
                <Formulario_create_taller />
              </PrivateRoute>
            }
          />
          <Route
            path="/creacionbeneficio"
            element={
              <PrivateRoute>
                <Formulario_create_beneficio />
              </PrivateRoute>
            }
          />
          <Route
            path="/registronovedad"
            element={
              <PrivateRoute>
                <Registro_novedades_formato />
              </PrivateRoute>
            }
          />
          <Route
            path="/actualizaraprendiz/:id"
            element={
              <PrivateRoute>
                <Update_aprendiz/>
              </PrivateRoute>
            }
          />
          <Route
            path="/talleres"
            element={
              <PrivateRoute>
                <Talleres />
              </PrivateRoute>
            }
          />
          <Route
            path="/asistencia/:codigo_taller"
            element={
              <PrivateRoute>
                <Asistencia_taller />
              </PrivateRoute>
            }
          />
          <Route
            path="/registroasistencia/:codigo_taller"
            element={
              <PrivateRoute>
                <Formulario_registro_asistencia_taller/>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Approutes;
