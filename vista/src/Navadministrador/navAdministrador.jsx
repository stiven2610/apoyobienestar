import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./styles.css";

const Navadministrador = () => {
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
                <Link to="/" className="nav-li" style={{ color: "#000000" }}>
                  Inicio
                </Link>
                <Link
                  to="/asistencia"
                  className="nav-li"
                  style={{ color: "#000000" }}
                >
                  Adjudicados
                </Link>
                <Link to="/login" className="nav-li" style={{ color: "#000000" }}>
                  Aprendices Cancelados
                </Link>
                {/* Cuando se hace clic en "Contactanos", renderiza FormContactos */}
                <Link
                  to="/contacto"
                  className="nav-li"
                  style={{ color: "#000000" }}
                >
                  Creación de taller 
                </Link>
                <Link
                  to="/normatividad"
                  className="nav-li"
                  style={{ color: "#000000" }}
                >
                  Novedades
                </Link>
                <Link
                  to="/login"
                  className="nav-li"
                  style={{ color: "#000000" }}
                >
                  Registro de novedades de taller mensual
                </Link>
                <Link
                  to="/login"
                  className="nav-li"
                  style={{ color: "#000000" }}
                >
                  
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navadministrador;
