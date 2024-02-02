import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Navegacion = () => {
  const handleLoginClick = () => {
    const loginElement = document.getElementById("login-section");
    loginElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactanosClick = () => {
    const contactanosElement = document.getElementById("contactanos-section");
    contactanosElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleAsistenciaClick = () => {
    const asistenciaElement = document.getElementById("asistencia-section");
    asistenciaElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="d-flex flex-column w-100 align-items-center justify-content-center"
      style={{ background: "#39A900" }}
    >
      <h2 className="text-center" style={{ color: "#000000" }}>
        SIGAAS
      </h2>
      <div className="d-flex align-items-center justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="container_nav">
                <Link
                  to="/asistenciataller"
                  className="nav-li"
                  style={{ color: "#000000" }}
                  onClick={handleAsistenciaClick}
                >
                  Asistencia
                </Link>
                <Link
                  to="/login"
                  className="nav-li"
                  style={{ color: "#000000" }}
                  onClick={handleLoginClick}
                >
                  Aplicación
                </Link>
                <Link
                  to="/contacto"
                  className="nav-li"
                  style={{ color: "#000000" }}
                  onClick={handleContactanosClick}
                >
                  Contactanos
                </Link>
                <a
                  href="https://normograma.sena.edu.co/docs/resolucion_sena_0169_2022.htm"
                  className="nav-li"
                  style={{ color: "#000000" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Normatividad
                </a>
              
         
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navegacion;
