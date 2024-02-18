import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AppRoutes/Authcontext";
import Boton from "../botones/Boton";
import "./styles.css";

const Nav_index = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <div className="header-container">
          <div className="logo-container">
            <img
              src="../../../public/images/logobienestar.png"
              alt="logo del Sena"
            />
          </div>
          <div className="navbar-container align-items-center ">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link to="/adjudicados" className="link-nav">
                    Adjudicados
                  </Link>
                 
                  <Link to="novedades" className="link-nav">
                    Novedades
                  </Link>
                  <Link to="registronovedad" className="link-nav">
                    Novedades formato de seguimiento
                  </Link>
                  <Link to="creacionbeneficio" className="link-nav">
                    Creación de beneficio
                  </Link>
                  <Link to="/cancelados" className="link-nav">
                    Aprendices Cancelados
                  </Link>
                  <Link to="/talleres" className="link-nav">
                    Talleres
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="container-boton"
          onClick={logout}
          >

            <Boton texto="Cerrar sesión" color="#39A900" textcolor="#ffffff" />
          </div>
        </div>
      ) : (
        <div className="header-container ">
          <div className="logo-container">
            <img
              src="../../../public/images/logobienestar.png"
              alt="logo del Sena"
            />
          </div>

          <div className="sigaas-container">
            <h2 className="sigaas">SIGAAS</h2>

            <div className="navbar align-items-center ">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Link to="/" className="link-nav">
                      Inicio
                    </Link>

                    <Link to="/login" className="link-nav">
                      Aplicación
                    </Link>
                    <Link to="/contacto" className="link-nav">
                      Contáctanos
                    </Link>
                    <a
                      href="https://normograma.sena.edu.co/docs/resolucion_sena_0169_2022.htm"
                      className="link-nav"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Normatividad
                    </a>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className="logo-container">
            <img src="../../../public/images/logo SENA.png" alt="" />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Nav_index;