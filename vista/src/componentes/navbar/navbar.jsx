import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";

const Navegacion = () => {
  return (
    <div
      className=" d-flex flex-column w-100 aling-items-center justify-content-center"
      style={{ background: "#39A900" }}
    >
      <h2 className="text-center " style={{ color: "#000000" }}>
        APOYO DE SOSTENIMIENTO
      </h2>
      <div className="d-flex align-items-center justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link" style={{ color: "#000000" }}>
                Inicio
              </Link>
              <Link
                to="/formularioregistro"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Asistencia
              </Link>
              <Link
                to="/login"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Aplicación
              </Link>
              <NavDropdown title="Más opciones" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://oferta.senasofiaplus.edu.co/sofia-oferta/inscripcion-apoyo-sostenimiento.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                >
                  Realizar inscripción
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navegacion;
