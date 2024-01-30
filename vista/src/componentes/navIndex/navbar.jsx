import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

const Navegacion = () => {
  return (
    <div
      className=" d-flex flex-column w-100 aling-items-center justify-content-center"
      style={{ background: "#39A900" }}
    >
      <h2 className="text-center " style={{ color: "#000000" }}>
        SIGAAS
      </h2>
      <div className="d-flex align-items-center justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="container_nav">

              <li to="/" className="nav-li" style={{ color: "#000000" }}>
                Inicio
              </li>
              <li
                to="/formularioregistro"
                className="nav-li"
                style={{ color: "#000000" }}
              >
                Asistencia
              </li>
              <li
                to="/login"
                className="nav-li"
                style={{ color: "#000000" }}
              >
                Aplicación
              </li>
              <li
                to="/login"
                className="nav-li"
                style={{ color: "#000000" }}
              >
                Contactanos
              </li>
              <li
                to="/login"
                className="nav-li"
                style={{ color: "#000000" }}
              >
                Normatividad 
              </li>
              <li
                to="/login"
                className="nav-li"
                style={{ color: "#000000" }}
              >
               ¿Quienes somos ? 
              </li>
              <li
                to="/login"
                className="nav-li"
                style={{ color: "#000000" }}
              >
               Objetivos 
              </li>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navegacion;
