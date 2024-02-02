import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Navadministrador = ({ onLogin }) => {
  const handleLogout = () => {
    // Llama a onLogin con el parámetro false para indicar cierre de sesión
    onLogin(false);
  };

  return (
    <div className="d-flex flex-column w-100 aling-items-center justify-content-center" style={{ background: "#39A900" }}>
      <h2 className="text-center" style={{ color: "#000000" }}>
        SIGAAS
      </h2>
      <div className="d-flex align-items-center justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="container_nav">
                <Link onClick={handleLogout} className="nav-li" style={{ color: "#000000" }}>
                  Salir
                </Link>
                <Link to="/adjudicados" className="nav-li" style={{ color: "#000000" }}>
                  Adjudicados
                </Link>
                <Link to="/cancelados" className="nav-li" style={{ color: "#000000" }}>
                  Aprendices Cancelados
                </Link>
                <Link to="/creaciontaller" className="nav-li" style={{ color: "#000000" }}>
                  Creación de taller 
                </Link>
                <Link to="/novedadcomponent" className="nav-li" style={{ color: "#000000" }}>
                  Novedades
                </Link>
                <Link to="/novedades" className="nav-li" style={{ color: "#000000" }}>
                  Registro de novedades de taller mensual
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
