import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aprendiz_lectiva from "./componentes/Aprendiz_lectiva/Aprendiz_lectiva";
import Asistencia_taller_adm from "./componentes/Asitencia_taller_adm/Asistencia_taller_adm";
import Login from "./componentes/login/Login";
import Beneficio from "./componentes/Beneficio/Beneficio";
import Aprendices_adjudicados from "./componentes/Aprendices_ajudicados/Aprendices_adjudicados";
import Cargue_formato_seguimiento from "./componentes/Cargue_formato_seguimiento/Cargue_formato_seguimiento";
import FormRegistro from "./componentes/formulario de registros/formularioRegistroAsistencia";
import Formulario_gestion_aprendiz from "./componentes/Formulario_gestion_aprendiz/Gestion_aprendiz";
import Padre from "./componentes/padre/padre";
import Tabla_culminacion from "./componentes/apredizculminacion/culminacion";
import Creacion_taller from "./componentes/Creacion_taller/creacion_taller";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Padre />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/beneficio",
    element: <Beneficio />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/adjudicados",
    element: <Aprendices_adjudicados />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/tablalectiva",
    element: <Aprendiz_lectiva />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/culminaformacion",
    element: <Tabla_culminacion />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/registroasistencia",
    element: <Asistencia_taller_adm />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/formatoseguimiento",
    element: <Cargue_formato_seguimiento />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/tallermensual",
    element: <Creacion_taller />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/asistencia",
    element: <Asistencia_taller_adm />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/gestiondatosaprendiz",
    element: <Formulario_gestion_aprendiz />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/formularioregistro",
    element: <FormRegistro />,
    errorElement: <h1>error</h1>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
